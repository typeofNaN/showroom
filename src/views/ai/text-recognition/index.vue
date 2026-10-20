<template>
  <div class="h-full overflow-auto">
    <n-grid cols="1 l:2" responsive="screen" :x-gap="16" :y-gap="16">
      <n-gi>
        <n-card
          :title="$t('page.ai.textRecognition.title')"
          :bordered="false"
          class="h-full rounded-8px shadow-sm"
        >
          <div
            class="min-h-460px flex-center overflow-hidden rounded-8px bg-#f5f7fa dark:bg-#18181c"
          >
            <img
              v-if="imageUrl"
              :src="imageUrl"
              class="max-h-520px max-w-full object-contain"
              :alt="$t('page.ai.textRecognition.imageAlt')"
            />
            <div
              v-else
              class="flex-col-center gap-12px text-center text-#8c8c8c"
            >
              <svg-icon icon="solar:scanner-2-outline" class="text-64px" />
              <span>{{ $t('page.ai.textRecognition.uploadTip') }}</span>
            </div>
          </div>

          <div class="mt-16px flex flex-wrap gap-12px">
            <input
              ref="fileInputRef"
              class="hidden"
              type="file"
              accept="image/*"
              @change="handleFileChange"
            />
            <n-button
              type="primary"
              :disabled="recognizing"
              @click="fileInputRef?.click()"
            >
              <template #icon
                ><svg-icon icon="solar:upload-outline"
              /></template>
              {{ $t('page.ai.common.selectImage') }}
            </n-button>
            <n-button
              :loading="recognizing"
              :disabled="!imageUrl"
              @click="recognizeText"
            >
              <template #icon
                ><svg-icon icon="solar:text-recognition-outline"
              /></template>
              {{ $t('page.ai.common.startRecognition') }}
            </n-button>
          </div>

          <div v-if="recognizing" class="mt-16px">
            <div class="mb-8px flex justify-between">
              <span>{{ progressLabel }}</span>
              <span>{{ progress }}%</span>
            </div>
            <n-progress
              type="line"
              :percentage="progress"
              :show-indicator="false"
              processing
            />
          </div>
          <n-alert v-if="errorMessage" type="error" class="mt-16px" show-icon>{{
            errorMessage
          }}</n-alert>
        </n-card>
      </n-gi>

      <n-gi>
        <n-card
          :title="$t('page.ai.textRecognition.resultTitle')"
          :bordered="false"
          class="h-full rounded-8px shadow-sm"
        >
          <template #header-extra>
            <n-button
              text
              type="primary"
              :disabled="!recognizedText"
              @click="copyResult"
            >
              <template #icon><svg-icon icon="solar:copy-outline" /></template>
              {{ $t('page.ai.textRecognition.copy') }}
            </n-button>
          </template>
          <n-input
            v-model:value="recognizedText"
            type="textarea"
            :autosize="{ minRows: 18, maxRows: 24 }"
            :placeholder="$t('page.ai.textRecognition.placeholder')"
          />
          <div class="mt-12px flex justify-between text-13px text-#8c8c8c">
            <span>{{ $t('page.ai.textRecognition.language') }}</span>
            <span>{{
              $t('page.ai.textRecognition.characterCount', {
                count: recognizedText.length,
              })
            }}</span>
          </div>
          <n-divider />
          <n-text depth="3">{{
            $t('page.ai.textRecognition.privacyTip')
          }}</n-text>
        </n-card>
      </n-gi>
    </n-grid>
  </div>
</template>

<script lang="ts" setup>
import { onBeforeUnmount, ref } from 'vue'
import { createWorker, type LoggerMessage, type Worker } from 'tesseract.js'
import { $t } from '@/locales'
import { getModelPath } from '../shared/model-path'
import { summarizeOcrProgress } from '../shared/result'

const fileInputRef = ref<HTMLInputElement>()
const imageUrl = ref('')
const recognizedText = ref('')
const recognizing = ref(false)
const progress = ref(0)
const progressLabel = ref($t('page.ai.textRecognition.progress.preparing'))
const errorMessage = ref('')

let worker: Worker | null = null
let disposed = false

onBeforeUnmount(async () => {
  disposed = true
  revokeImageUrl()
  const activeWorker = worker
  setWorker(null)
  await activeWorker?.terminate()
})

function handleFileChange(event: Event) {
  const input = event.target as HTMLInputElement
  const file = input.files?.[0]
  input.value = ''
  if (!file) return

  if (!file.type.startsWith('image/')) {
    errorMessage.value = $t('page.ai.common.invalidImage')
    return
  }

  revokeImageUrl()
  imageUrl.value = URL.createObjectURL(file)
  recognizedText.value = ''
  errorMessage.value = ''
  progress.value = 0
}

async function recognizeText() {
  if (!imageUrl.value || recognizing.value) return

  recognizing.value = true
  errorMessage.value = ''
  let activeWorker = worker
  try {
    if (!activeWorker) {
      const createdWorker = await createWorker('chi_sim+eng', 1, {
        workerPath: getModelPath('models/tesseract/worker/worker.min.js'),
        corePath: getModelPath(
          'models/tesseract/core/tesseract-core-lstm.wasm.js',
        ),
        langPath: getModelPath('models/tesseract/lang'),
        logger(message: LoggerMessage) {
          if (disposed) return
          const state = summarizeOcrProgress(message)
          progress.value = state.percentage
          progressLabel.value = $t(
            `page.ai.textRecognition.progress.${state.label}` as I18nType.I18nKey,
          )
        },
      })
      if (disposed) {
        await createdWorker.terminate()
        return
      }
      setWorker(createdWorker)
      activeWorker = createdWorker
    }
    const result = await activeWorker.recognize(imageUrl.value)
    if (disposed) return
    recognizedText.value = result.data.text.trim()
    progress.value = 100
    progressLabel.value = $t('page.ai.textRecognition.progress.completed')
    if (!recognizedText.value)
      errorMessage.value = $t('page.ai.textRecognition.noText')
  } catch (error) {
    if (disposed) return
    errorMessage.value = $t('page.ai.common.recognitionFailed', {
      message: getErrorMessage(error),
    })
    await activeWorker?.terminate()
    setWorker(null)
  } finally {
    if (!disposed) setRecognizing(false)
  }
}

async function copyResult() {
  try {
    await navigator.clipboard.writeText(recognizedText.value)
    window.$message?.success($t('page.ai.textRecognition.copySuccess'))
  } catch {
    window.$message?.error($t('page.ai.textRecognition.copyFailed'))
  }
}

function revokeImageUrl() {
  if (imageUrl.value) URL.revokeObjectURL(imageUrl.value)
  imageUrl.value = ''
}

function setWorker(nextWorker: Worker | null) {
  worker = nextWorker
}

function setRecognizing(value: boolean) {
  recognizing.value = value
}

function getErrorMessage(error: unknown) {
  return error instanceof Error ? error.message : String(error)
}
</script>
