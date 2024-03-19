<template>
  <n-space :vertical="true" :size="16">
    <n-row :gutter="[16, 16]">
      <n-col :span="18">
        <n-card :bordered="false" class="rounded-8px shadow-sm">hello</n-card>
      </n-col>
      <n-col :span="6">
        <Hitokoto />
      </n-col>
    </n-row>
  </n-space>
</template>

<script lang="ts" setup>
import Hitokoto from '@/components/hitokoto/index.vue'
</script>