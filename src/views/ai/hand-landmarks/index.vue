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
            class="camera-stage min-h-560px h-full overflow-hidden rounded-8px bg-#06080d"
          >
            <video
              ref="videoRef"
              class="h-full w-full object-contain"
              autoplay
              muted
              playsinline
              @loadeddata="startRenderLoop"
            />
            <canvas ref="canvasRef" class="pointer-events-none absolute" />
            <div
              v-if="!cameraRunning"
              class="absolute inset-0 flex-col-center gap-16px text-center text-white/70"
            >
              <svg-icon icon="solar:hand-stars-outline" class="text-72px" />
              <div>
                <p class="m-0 text-18px text-white">
                  {{ $t('page.ai.handLandmarks.title') }}
                </p>
                <p class="mt-8px">{{ $t('page.ai.handLandmarks.subtitle') }}</p>
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
                @click="loadModel"
                >{{ $t('page.ai.common.retryModel') }}</n-button
              >
            </n-space>
          </n-card>

          <n-card
            :title="$t('page.ai.handLandmarks.resultTitle')"
            :bordered="false"
            class="rounded-8px shadow-sm"
          >
            <n-empty
              v-if="!hands.length"
              :description="$t('page.ai.handLandmarks.emptyResult')"
              class="py-32px"
            />
            <n-list v-else>
              <n-list-item v-for="(hand, index) in hands" :key="index">
                <div class="flex items-center justify-between">
                  <div class="flex items-center gap-10px">
                    <div
                      class="h-36px w-36px flex-center rounded-full bg-primary/12 text-primary"
                    >
                      <svg-icon
                        icon="solar:hand-shake-outline"
                        class="text-20px"
                      />
                    </div>
                    <div>
                      <p class="m-0 font-medium">{{ hand.label }}</p>
                      <n-text depth="3" class="text-12px">{{
                        $t('page.ai.handLandmarks.landmarkCount')
                      }}</n-text>
                    </div>
                  </div>
                  <n-tag size="small" type="primary">{{
                    hand.confidence
                  }}</n-tag>
                </div>
              </n-list-item>
            </n-list>
          </n-card>

          <n-card :bordered="false" class="rounded-8px shadow-sm">
            <n-text depth="3">{{
              $t('page.ai.handLandmarks.privacyTip')
            }}</n-text>
          </n-card>
        </n-space>
      </n-gi>
    </n-grid>
  </div>
</template>

<script lang="ts" setup>
import { onBeforeUnmount, onMounted, ref } from 'vue'
import {
  DrawingUtils,
  FilesetResolver,
  HandLandmarker,
  type HandLandmarkerResult,
} from '@mediapipe/tasks-vision'
import { $t } from '@/locales'
import { getModelPath } from '../shared/model-path'
import { toHandLabel } from '../shared/result'

const WASM_PATH = getModelPath('models/mediapipe/wasm')
const MODEL_PATH = getModelPath('models/mediapipe/hand_landmarker.task')

const stageRef = ref<HTMLDivElement>()
const videoRef = ref<HTMLVideoElement>()
const canvasRef = ref<HTMLCanvasElement>()
const modelState = ref<'loading' | 'ready' | 'error'>('loading')
const modelReady = ref(false)
const cameraRunning = ref(false)
const startingCamera = ref(false)
const errorMessage = ref('')
const hands = ref<Array<{ label: string; confidence: string }>>([])

let handLandmarker: HandLandmarker | null = null
let mediaStream: MediaStream | null = null
let animationId = 0
let lastVideoTime = -1
let lastDetectionAt = 0
let cameraGeneration = 0
let disposed = false

onMounted(loadModel)
onBeforeUnmount(() => {
  disposed = true
  dispose()
})

async function loadModel() {
  modelState.value = 'loading'
  errorMessage.value = ''
  try {
    const vision = await FilesetResolver.forVisionTasks(WASM_PATH)
    const createdLandmarker = await HandLandmarker.createFromOptions(vision, {
      baseOptions: {
        modelAssetPath: MODEL_PATH,
        delegate: 'GPU',
      },
      runningMode: 'VIDEO',
      numHands: 2,
      minHandDetectionConfidence: 0.5,
      minTrackingConfidence: 0.5,
    })
    if (disposed) {
      createdLandmarker.close()
      return
    }
    handLandmarker?.close()
    handLandmarker = createdLandmarker
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
  if (!handLandmarker || startingCamera.value) return

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
    await videoRef.value.play()
  } catch (error) {
    stopCamera()
    errorMessage.value = $t('page.ai.common.cameraUnavailable', {
      message: getErrorMessage(error),
    })
  } finally {
    // The flag is owned by this guarded camera-start operation.
    // eslint-disable-next-line require-atomic-updates
    startingCamera.value = false
  }
}

function startRenderLoop() {
  cancelAnimationFrame(animationId)
  renderFrame()
}

function renderFrame() {
  const video = videoRef.value
  const canvas = canvasRef.value
  const stage = stageRef.value
  if (!cameraRunning.value || !video || !canvas || !stage || !handLandmarker)
    return

  const now = performance.now()
  if (video.currentTime !== lastVideoTime && now - lastDetectionAt >= 80) {
    lastVideoTime = video.currentTime
    lastDetectionAt = now
    const result = handLandmarker.detectForVideo(video, now)
    drawResult(result, canvas, stage)
    hands.value = result.handedness.map((categories) => {
      const hand = toHandLabel(categories[0])
      return {
        ...hand,
        label: $t(`page.ai.handLandmarks.${hand.label}` as I18nType.I18nKey),
      }
    })
  }
  animationId = requestAnimationFrame(renderFrame)
}

function drawResult(
  result: HandLandmarkerResult,
  canvas: HTMLCanvasElement,
  stage: HTMLDivElement,
) {
  const video = videoRef.value
  if (!video || !video.videoWidth || !video.videoHeight) return

  if (
    canvas.width !== video.videoWidth ||
    canvas.height !== video.videoHeight
  ) {
    canvas.width = video.videoWidth
    canvas.height = video.videoHeight
  }

  const stageRatio = stage.clientWidth / stage.clientHeight
  const videoRatio = video.videoWidth / video.videoHeight
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

  const ctx = canvas.getContext('2d')
  if (!ctx) return
  ctx.clearRect(0, 0, canvas.width, canvas.height)

  const drawingUtils = new DrawingUtils(ctx)
  result.landmarks.forEach((landmarks) => {
    drawingUtils.drawConnectors(landmarks, HandLandmarker.HAND_CONNECTIONS, {
      color: '#7c3aed',
      lineWidth: 3,
    })
    drawingUtils.drawLandmarks(landmarks, {
      color: '#22d3ee',
      fillColor: '#ffffff',
      radius: 4,
    })
  })
}

function stopCamera() {
  cameraGeneration += 1
  cancelAnimationFrame(animationId)
  mediaStream?.getTracks().forEach((track) => track.stop())
  mediaStream = null
  if (videoRef.value) videoRef.value.srcObject = null
  canvasRef.value
    ?.getContext('2d')
    ?.clearRect(0, 0, canvasRef.value.width, canvasRef.value.height)
  cameraRunning.value = false
  hands.value = []
  lastVideoTime = -1
  lastDetectionAt = 0
}

function dispose() {
  stopCamera()
  handLandmarker?.close()
  handLandmarker = null
}

function getErrorMessage(error: unknown) {
  return error instanceof Error ? error.message : String(error)
}
</script>

<style scoped lang="scss">
.camera-stage {
  position: relative;
  background-image: radial-gradient(
    circle at center,
    rgb(34 211 238 / 8%),
    transparent 55%
  );
}
</style>
