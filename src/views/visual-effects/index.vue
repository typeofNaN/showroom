<template>
  <n-space vertical :size="16">
    <n-row :gutter="[16, 16]">
      <n-col v-for="(item, index) in list" :span="12" :key="index">
        <div class="flex-center b-rd-4px bg-#fff h-500px">
          <component :is="item.component" />
        </div>
      </n-col>
    </n-row>
  </n-space>
</template>

<script lang="ts" setup>
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
