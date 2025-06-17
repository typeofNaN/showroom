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
import BgFusion from './components/bg-fusion/index.vue'
import MixBlendMode from './components/mix-blend-mode/index.vue'
import AudioLoading from './components/audio-loading/index.vue'
import ChargingAnimation from './components/charging-animation/index.vue'

type ListType = {
  name: string
  component: any
}

const list: ListType[] = [
  {
    name: '',
    component: Honeycomb
  },
  {
    name: '',
    component: BgFusion
  },
  {
    name: '',
    component: MixBlendMode
  },
  {
    name: '',
    component: AudioLoading
  },
  {
    name: '',
    component: ChargingAnimation
  }
]
</script>
