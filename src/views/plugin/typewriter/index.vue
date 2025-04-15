<template>
  <div class="flex-col-stretch gap-16px overflow-hidden lt-sm:overflow-auto">
    <n-card :title="$t('routes.plugin.typewriter')" :bordered="false" class="h-full">
      <span ref="textRef" class="text-18px" />
    </n-card>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, shallowRef } from 'vue'
import TypeIt from 'typeit'
import type { Options } from 'typeit'
import type { El } from 'typeit/dist/types'

import { $t } from '@/locales'

const textRef = shallowRef<El>()

function init() {
  if (!textRef.value) return

  const options: Options = {
    strings: '落霞与孤鹜齐飞，秋水共长天一色。',
    lifeLike: true,
    speed: 120,
    loop: true
  }

  const initTypeIt = new TypeIt(textRef.value, options)

  initTypeIt.go()
}

onMounted(() => {
  init()
})
</script>