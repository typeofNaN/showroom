<template>
  <div class="flex-col-stretch gap-16px overflow-hidden lt-sm:overflow-auto">
    <n-card :title="$t('routes.plugin.pinyin')" :bordered="false" class="h-full">
      <n-divider title-placement="left">常规使用</n-divider>
      <p v-html="htmlStr1" class="text-18px" />
      <n-divider title-placement="left">不带音调</n-divider>
      <p v-html="htmlStr2" class="text-18px" />
      <n-divider title-placement="left">自定义样式</n-divider>
      <p v-html="htmlStr1" class="custom-style text-18px" />
    </n-card>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import { html } from 'pinyin-pro'
import domPurify from 'dompurify'

const htmlStr1 = ref('')
const htmlStr2 = ref('')

function renderHtml() {
  const text = '落霞与孤鹜齐飞，秋水共长天一色。'

  htmlStr1.value = domPurify.sanitize(html(text))
  htmlStr2.value = domPurify.sanitize(html(text, { toneType: 'none' }))
}

onMounted(() => {
  renderHtml()
})
</script>

<style lang="scss" scoped>
.custom-style {
  :deep(.py-result-item) {
    .py-chinese-item {
      --uno: text-primary;
    }

    .py-pinyin-item {
      --uno: text-error;
    }
  }
}
</style>