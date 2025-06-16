<template>
  <n-space vertical :size="16">
    <n-row :gutter="[16, 16]">
      <n-col v-for="(item, index) in list" :span="12" :key="index">
        <n-card :title="$t(item.name)" :bordered="false" class="h-440px">
          <component :is="item.component" />
        </n-card>
      </n-col>
    </n-row>
  </n-space>
</template>

<script lang="ts" setup>
import { $t } from '@/locales'
import Honeycomb from './components/honeycomb/index.vue'

type ListType = {
  name: string
  component: any
}

const list: ListType[] = [
  {
    name: 'page.visualEffects.honeycombLayout',
    component: Honeycomb
  }
]
</script>
