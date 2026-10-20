<template>
  <div class="h-full overflow-auto">
    <n-grid
      cols="1 l:4"
      responsive="screen"
      :x-gap="16"
      :y-gap="16"
      class="h-full"
    >
      <n-gi span="1 l:3">
        <n-card
          :bordered="false"
          class="h-full rounded-8px shadow-sm"
          content-style="height: 100%; padding: 0;"
        >
          <div
            ref="stageRef"
            class="face-stage min-h-560px h-full overflow-hidden rounded-8px bg-#05070b"
          >
            <video
              ref="videoRef"
              class="h-full w-full object-contain"
              autoplay
              muted
              playsinline
              @playing="startDetection"
            />
            <canvas ref="canvasRef" class="pointer-events-none absolute" />
            <div
              v-if="!cameraRunning"
              class="absolute inset-0 flex-col-center gap-16px text-center text-white/70"
            >
              <svg-icon icon="tabler:face-id" class="text-72px" />
              <div>
                <p class="m-0 text-18px text-white">
                  {{ $t('page.ai.facialRecognition.title') }}
                </p>
                <p class="mt-8px">
                  {{ $t('page.ai.facialRecognition.subtitle') }}
                </p>
              </div>
            </div>
            <div class="absolute left-16px top-16px flex gap-8px">
              <n-tag
                :type="
                  modelState === 'ready'
                    ? 'success'
                    : modelState === 'error'
                    ? 'error'
                    : 'warning'
                "
                round
              >
                {{
                  modelState === 'ready'
                    ? $t('page.ai.common.modelReady')
                    : modelState === 'error'
                    ? $t('page.ai.common.modelLoadFailed')
                    : $t('page.ai.common.modelLoading')
                }}
              </n-tag>
              <n-tag v-if="cameraRunning" type="error" round>{{
                $t('page.ai.common.live')
              }}</n-tag>
            </div>
          </div>
        </n-card>
      </n-gi>

      <n-gi>
        <n-space vertical :size="16" class="h-full">
          <n-card
            :title="$t('page.ai.common.controlPanel')"
            :bordered="false"
            class="rounded-8px shadow-sm"
          >
            <n-space vertical>
              <n-button
                v-if="!cameraRunning"
                block
                type="primary"
                :loading="startingCamera"
                :disabled="!modelReady"
                @click="startCamera"
              >
                <template #icon
                  ><svg-icon icon="solar:videocamera-record-outline"
                /></template>
                {{ $t('page.ai.common.startCamera') }}
              </n-button>
              <n-button v-else block type="error" ghost @click="stopCamera">
                <template #icon
                  ><svg-icon icon="solar:stop-circle-outline"
                /></template>
                {{ $t('page.ai.common.stopDetection') }}
              </n-button>
              <n-alert v-if="errorMessage" type="error" show-icon>{{
                errorMessage
              }}</n-alert>
              <n-button
                v-if="modelState === 'error'"
                block
                secondary
                @click="loadModels"
                >{{ $t('page.ai.common.retryModel') }}</n-button
              >
            </n-space>
          </n-card>

          <n-card
            :title="$t('page.ai.facialRecognition.resultTitle')"
            :bordered="false"
            class="rounded-8px shadow-sm"
          >
            <n-empty
              v-if="!faces.length"
              :description="$t('page.ai.facialRecognition.emptyResult')"
              class="py-24px"
            />
            <n-list v-else>
              <n-list-item v-for="(face, index) in faces" :key="index">
                <div class="w-full">
                  <div class="mb-10px flex items-center justify-between">
                    <span class="font-medium">{{
                      $t('page.ai.facialRecognition.faceNumber', {
                        index: index + 1,
                      })
                    }}</span>
                    <n-tag size="small" type="primary">{{
                      $t('page.ai.facialRecognition.ageGender', {
                        gender: face.gender,
                        age: face.age,
                      })
                    }}</n-tag>
                  </div>
                  <div class="flex items-center justify-between text-13px">
                    <n-text depth="3">{{
                      $t('page.ai.facialRecognition.dominantExpression')
                    }}</n-text>
                    <span
                      >{{ face.expression }}
                      {{ face.expressionConfidence }}</span
                    >
                  </div>
                </div>
              </n-list-item>
            </n-list>
          </n-card>

          <n-card :bordered="false" class="rounded-8px shadow-sm">
            <n-text depth="3">{{
              $t('page.ai.facialRecognition.privacyTip')
            }}</n-text>
          </n-card>
        </n-space>
      </n-gi>
    </n-grid>
  </div>
</template>

<script lang="ts" setup>
import { onBeforeUnmount, onMounted, ref } from 'vue'
import * as faceApi from 'face-api.js'
import { $t } from '@/locales'
import { getModelPath } from '../shared/model-path'
import { formatConfidence } from '../shared/result'

const MODEL_PATH = getModelPath('models/faceapi')
const stageRef = ref<HTMLDivElement>()
const videoRef = ref<HTMLVideoElement>()
const canvasRef = ref<HTMLCanvasElement>()
const modelState = ref<'loading' | 'ready' | 'error'>('loading')
const modelReady = ref(false)
const cameraRunning = ref(false)
const startingCamera = ref(false)
const errorMessage = ref('')
const faces = ref<
  Array<{
    age: number
    gender: string
    expression: string
    expressionConfidence: string
  }>
>([])

let mediaStream: MediaStream | null = null
let detectionTimer = 0
let detecting = false
let cameraGeneration = 0
let detectionGeneration = 0
let disposed = false

onMounted(loadModels)
onBeforeUnmount(() => {
  disposed = true
  stopCamera()
})

async function loadModels() {
  modelState.value = 'loading'
  errorMessage.value = ''
  try {
    await Promise.all([
      faceApi.nets.tinyFaceDetector.loadFromUri(MODEL_PATH),
      faceApi.nets.faceLandmark68TinyNet.loadFromUri(MODEL_PATH),
      faceApi.nets.faceExpressionNet.loadFromUri(MODEL_PATH),
      faceApi.nets.ageGenderNet.loadFromUri(MODEL_PATH),
    ])
    if (disposed) return
    modelReady.value = true
    modelState.value = 'ready'
  } catch (error) {
    if (disposed) return
    modelReady.value = false
    modelState.value = 'error'
    errorMessage.value = $t('page.ai.common.modelLoadError', {
      message: getErrorMessage(error),
    })
  }
}

async function startCamera() {
  if (!modelReady.value || startingCamera.value) return
  startingCamera.value = true
  errorMessage.value = ''
  cameraGeneration += 1
  const generation = cameraGeneration
  try {
    const stream = await navigator.mediaDevices.getUserMedia({
      video: {
        facingMode: 'user',
        width: { ideal: 1280 },
        height: { ideal: 720 },
      },
      audio: false,
    })
    if (disposed || generation !== cameraGeneration || !videoRef.value) {
      stream.getTracks().forEach((track) => track.stop())
      return
    }
    mediaStream = stream
    videoRef.value.srcObject = stream
    cameraRunning.value = true
    detectionGeneration += 1
    await videoRef.value.play()
  } catch (error) {
    stopCamera()
    if (disposed) return
    errorMessage.value = $t('page.ai.common.cameraUnavailable', {
      message: getErrorMessage(error),
    })
  } finally {
    // The flag is owned by this guarded camera-start operation.
    // eslint-disable-next-line require-atomic-updates
    startingCamera.value = false
  }
}

function startDetection() {
  window.clearTimeout(detectionTimer)
  detectFaces()
}

async function detectFaces() {
  const video = videoRef.value
  const canvas = canvasRef.value
  const stage = stageRef.value
  if (!cameraRunning.value || !video || !canvas || !stage || detecting) return
  detecting = true
  const generation = detectionGeneration
  try {
    const detections = await faceApi
      .detectAllFaces(
        video,
        new faceApi.TinyFaceDetectorOptions({
          inputSize: 320,
          scoreThreshold: 0.5,
        }),
      )
      .withFaceLandmarks(true)
      .withFaceExpressions()
      .withAgeAndGender()
    if (!cameraRunning.value || generation !== detectionGeneration || disposed)
      return

    const resized = faceApi.resizeResults(
      detections,
      syncCanvas(canvas, stage, video),
    )
    const ctx = canvas.getContext('2d')
    ctx?.clearRect(0, 0, canvas.width, canvas.height)
    faceApi.draw.drawDetections(canvas, resized)
    faceApi.draw.drawFaceLandmarks(canvas, resized)
    resized.forEach((result) => {
      const expression = Object.entries(result.expressions).sort(
        (a, b) => b[1] - a[1],
      )[0]
      new faceApi.draw.DrawTextField(
        [
          $t('page.ai.facialRecognition.ageGender', {
            gender:
              result.gender === 'male'
                ? $t('page.ai.facialRecognition.male')
                : $t('page.ai.facialRecognition.female'),
            age: Math.round(result.age),
          }),
        ],
        result.detection.box.bottomLeft,
      ).draw(canvas)
      if (expression) {
        new faceApi.draw.DrawTextField(
          [
            `${getExpressionLabel(expression[0])} ${formatConfidence(
              expression[1],
            )}`,
          ],
          result.detection.box.topLeft,
        ).draw(canvas)
      }
    })

    faces.value = detections.map((result) => {
      const expression = Object.entries(result.expressions).sort(
        (a, b) => b[1] - a[1],
      )[0]
      return {
        age: Math.round(result.age),
        gender:
          result.gender === 'male'
            ? $t('page.ai.facialRecognition.male')
            : $t('page.ai.facialRecognition.female'),
        expression: expression?.[0]
          ? getExpressionLabel(expression[0])
          : $t('page.ai.facialRecognition.unknown'),
        expressionConfidence: formatConfidence(expression?.[1] || 0),
      }
    })
  } catch (error) {
    if (generation !== detectionGeneration || disposed) return
    errorMessage.value = $t('page.ai.common.detectionFailed', {
      message: getErrorMessage(error),
    })
  } finally {
    // A second detection cannot enter while this flag is true.
    // eslint-disable-next-line require-atomic-updates
    detecting = false
    if (cameraRunning.value) {
      const delay = generation === detectionGeneration ? 180 : 0
      detectionTimer = window.setTimeout(detectFaces, delay)
    }
  }
}

function syncCanvas(
  canvas: HTMLCanvasElement,
  stage: HTMLDivElement,
  video: HTMLVideoElement,
) {
  const width = video.videoWidth
  const height = video.videoHeight
  if (canvas.width !== width || canvas.height !== height) {
    canvas.width = width
    canvas.height = height
  }

  const stageRatio = stage.clientWidth / stage.clientHeight
  const videoRatio = width / height
  const drawWidth =
    stageRatio > videoRatio
      ? stage.clientHeight * videoRatio
      : stage.clientWidth
  const drawHeight =
    stageRatio > videoRatio
      ? stage.clientHeight
      : stage.clientWidth / videoRatio
  canvas.style.width = `${drawWidth}px`
  canvas.style.height = `${drawHeight}px`
  canvas.style.left = `${(stage.clientWidth - drawWidth) / 2}px`
  canvas.style.top = `${(stage.clientHeight - drawHeight) / 2}px`
  return { width, height }
}

function stopCamera() {
  cameraGeneration += 1
  detectionGeneration += 1
  cameraRunning.value = false
  window.clearTimeout(detectionTimer)
  mediaStream?.getTracks().forEach((track) => track.stop())
  mediaStream = null
  if (videoRef.value) videoRef.value.srcObject = null
  if (canvasRef.value)
    canvasRef.value
      .getContext('2d')
      ?.clearRect(0, 0, canvasRef.value.width, canvasRef.value.height)
  faces.value = []
}

function getErrorMessage(error: unknown) {
  return error instanceof Error ? error.message : String(error)
}

function getExpressionLabel(expression: string) {
  return $t(
    `page.ai.facialRecognition.expressions.${expression}` as I18nType.I18nKey,
  )
}
</script>

<style scoped lang="scss">
.face-stage {
  position: relative;
  background-image: radial-gradient(
    circle at center,
    rgb(124 58 237 / 10%),
    transparent 58%
  );
}
</style>
