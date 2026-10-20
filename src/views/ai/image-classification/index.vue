<template>
  <div class="h-full overflow-auto">
    <n-grid cols="1 l:3" responsive="screen" :x-gap="16" :y-gap="16">
      <n-gi span="1 l:2">
        <n-card :title="$t('page.ai.imageClassification.title')" :bordered="false" class="h-full rounded-8px shadow-sm">
          <template #header-extra>
            <n-tag :type="modelReady ? 'success' : loadingModel ? 'warning' : 'default'" round>
              {{
                modelReady
                  ? $t('page.ai.common.modelReady')
                  : loadingModel
                  ? $t('page.ai.common.modelLoading')
                  : $t('page.ai.common.waitingForLoad')
              }}
            </n-tag>
          </template>

          <div class="preview-panel min-h-520px flex-center overflow-hidden rounded-8px">
            <img
              v-if="imageUrl"
              ref="imageRef"
              :src="imageUrl"
              class="max-h-520px max-w-full object-contain"
              :alt="$t('page.ai.imageClassification.imageAlt')"
            />
            <div v-else class="flex-col-center gap-12px text-center text-#8c8c8c">
              <svg-icon icon="solar:gallery-add-outline" class="text-64px" />
              <span>{{ $t('page.ai.imageClassification.uploadTip') }}</span>
            </div>
          </div>

          <div class="mt-16px flex flex-wrap gap-12px">
            <input ref="fileInputRef" class="hidden" type="file" accept="image/*" @change="handleFileChange" />
            <n-button type="primary" @click="fileInputRef?.click()">
              <template #icon><svg-icon icon="solar:upload-outline" /></template>
              {{ $t('page.ai.common.selectImage') }}
            </n-button>
            <n-button :loading="classifying" :disabled="!imageUrl || !modelReady" @click="classifyImage">
              <template #icon><svg-icon icon="hugeicons:artificial-intelligence-02" /></template>
              {{ $t('page.ai.common.startRecognition') }}
            </n-button>
          </div>
          <n-alert v-if="modelLoadError" type="error" class="mt-16px" :show-icon="true">
            <div class="flex items-center justify-between gap-12px">
              <span>{{ modelLoadError }}</span>
              <n-button size="small" :loading="loadingModel" @click="loadModel">
                {{ $t('page.ai.common.retryModel') }}
              </n-button>
            </div>
          </n-alert>
          <n-alert v-else-if="operationError" type="error" class="mt-16px" :show-icon="true">
            {{ operationError }}
          </n-alert>
        </n-card>
      </n-gi>

      <n-gi>
        <n-card
          :title="$t('page.ai.imageClassification.resultTitle')"
          :bordered="false"
          class="h-full rounded-8px shadow-sm"
        >
          <n-spin :show="classifying">
            <n-empty
              v-if="!predictions.length"
              :description="$t('page.ai.imageClassification.emptyResult')"
              class="py-80px"
            />
            <n-space v-else vertical :size="20">
              <div v-for="(item, index) in predictions" :key="item.className">
                <div class="mb-8px flex items-center justify-between gap-12px">
                  <div class="min-w-0 flex items-center gap-8px">
                    <n-tag size="small" :type="index === 0 ? 'primary' : 'default'">#{{ index + 1 }}</n-tag>
                    <span class="truncate font-medium">{{ item.className }}</span>
                  </div>
                  <span class="text-primary font-semibold">{{ formatConfidence(item.probability) }}</span>
                </div>
                <n-progress type="line" :percentage="Math.round(item.probability * 100)" :show-indicator="false" />
              </div>
            </n-space>
          </n-spin>
          <n-divider />
          <n-text depth="3">{{ $t('page.ai.imageClassification.privacyTip') }}</n-text>
        </n-card>
      </n-gi>
    </n-grid>
  </div>
</template>

<script lang="ts" setup>
import { nextTick, onBeforeUnmount, onMounted, ref } from 'vue'
import type * as mobilenet from '@tensorflow-models/mobilenet'
import { $t } from '@/locales'
import { formatConfidence, topPredictions, type Prediction } from '../shared/result'
import { getMobileNetModel } from './mobilenet-model'

const fileInputRef = ref<HTMLInputElement>()
const imageRef = ref<HTMLImageElement>()
const imageUrl = ref('')
const predictions = ref<Prediction[]>([])
const loadingModel = ref(false)
const modelReady = ref(false)
const classifying = ref(false)
const modelLoadError = ref('')
const operationError = ref('')

let model: mobilenet.MobileNet | null = null
let loadGeneration = 0
let classificationGeneration = 0
let disposed = false

onMounted(loadModel)

onBeforeUnmount(() => {
  disposed = true
  loadGeneration += 1
  classificationGeneration += 1
  revokeImageUrl()
  model = null
})

async function loadModel() {
  if (loadingModel.value) return

  loadGeneration += 1
  const generation = loadGeneration
  loadingModel.value = true
  modelReady.value = false
  modelLoadError.value = ''
  try {
    const loadedModel = await getMobileNetModel()
    if (disposed || generation !== loadGeneration) return

    model = loadedModel
    modelReady.value = true
  } catch (error) {
    if (disposed || generation !== loadGeneration) return

    modelLoadError.value = $t('page.ai.common.modelLoadError', {
      message: getErrorMessage(error)
    })
  } finally {
    finishModelLoading(generation)
  }
}

function finishModelLoading(generation: number) {
  if (!disposed && generation === loadGeneration) loadingModel.value = false
}

function handleFileChange(event: Event) {
  const input = event.target as HTMLInputElement
  const file = input.files?.[0]
  input.value = ''
  if (!file) return

  if (!file.type.startsWith('image/')) {
    operationError.value = $t('page.ai.common.invalidImage')
    return
  }

  classificationGeneration += 1
  classifying.value = false
  revokeImageUrl()
  imageUrl.value = URL.createObjectURL(file)
  predictions.value = []
  operationError.value = ''
}

async function classifyImage() {
  if (!model || !imageRef.value) return

  classificationGeneration += 1
  const generation = classificationGeneration
  classifying.value = true
  operationError.value = ''
  try {
    await nextTick()
    const nextPredictions = topPredictions(await model.classify(imageRef.value, 5), 5)
    if (disposed || generation !== classificationGeneration) return

    predictions.value = nextPredictions
    if (!predictions.value.length) operationError.value = $t('page.ai.imageClassification.noResult')
  } catch (error) {
    if (disposed || generation !== classificationGeneration) return

    operationError.value = $t('page.ai.common.recognitionFailed', {
      message: getErrorMessage(error)
    })
  } finally {
    finishClassification(generation)
  }
}

function finishClassification(generation: number) {
  if (!disposed && generation === classificationGeneration) classifying.value = false
}

function revokeImageUrl() {
  if (imageUrl.value) URL.revokeObjectURL(imageUrl.value)
  imageUrl.value = ''
}

function getErrorMessage(error: unknown) {
  return error instanceof Error ? error.message : String(error)
}
</script>

<style scoped lang="scss">
.preview-panel {
  background: linear-gradient(45deg, rgb(0 0 0 / 3%) 25%, transparent 25%),
    linear-gradient(-45deg, rgb(0 0 0 / 3%) 25%, transparent 25%),
    linear-gradient(45deg, transparent 75%, rgb(0 0 0 / 3%) 75%),
    linear-gradient(-45deg, transparent 75%, rgb(0 0 0 / 3%) 75%);
  background-position:
    0 0,
    0 10px,
    10px -10px,
    -10px 0;
  background-size: 20px 20px;
}
</style>
