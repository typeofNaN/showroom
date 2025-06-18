<template>
  <div class="flex gap-16px h-full">
    <n-card title="" :bordered="false" size="small" class="w-[calc(100%-316px)] flex-center">
      <div class="h-full flex-center flex-col select-none">
        <n-image :src="welcomeImg" object-fit="contain" width="1000" :preview-disabled="true" />
      </div>
    </n-card>
    <div class="flex flex-col gap-16px w-300px">
      <Hitokoto />
    </div>
  </div>
</template>

<script lang="ts" setup>
import Hitokoto from '@/components/hitokoto/index.vue'
import welcomeImg from '@/assets/images/welcome.png'
</script>