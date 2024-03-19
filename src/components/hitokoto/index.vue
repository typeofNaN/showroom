<template>
  <n-card :bordered="false" class="rounded-8px shadow-sm" title="每日一言">
    <template #header-extra>
      <hover-container class="w-64px h-full" placement="bottom-end" @click="getHitokotoData">
        <icon-mdi-refresh class="text-22px" :class="{ 'animate-spin': loading }" />
      </hover-container>
    </template>
    <template v-if="hitokotoData">
      <div class="content">“{{ hitokotoData.hitokoto }}”</div>
      <div class="from">《{{ hitokotoData.from }}》</div>
      <div class="author"> -- {{ hitokotoData.from_who }}</div>
    </template>
  </n-card>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue'

import { useLoading } from '@/hooks'
import { HitokotoApi } from '@/service'

const hitokotoData = ref<ApiHitokoto.IGetHitokotoDataRes>({
  commit_from: 'api',
  created_at: '1541996434',
  creator: '我眼中有星河万里',
  creator_uid: 2311,
  from: '九思',
  from_who: '',
  hitokoto: '故事的结局从来不人意！',
  id: 4035,
  length: 11,
  reviewer: 0,
  type: 'e',
  uuid: 'b69df0ef-287e-4ae8-b728-81d50cc03dd4'
})

const { loading, startLoading, endLoading } = useLoading()

onMounted(async () => {
  await getHitokotoData()
})

async function getHitokotoData() {
  startLoading()
  const { data } = await HitokotoApi.getHitokotoData()
  console.log(data)
  if (data) {
    hitokotoData.value = data
  }
  endLoading()
}
</script>