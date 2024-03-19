<template>
  <n-card :bordered="false" class="rounded-8px shadow-sm">
    <template #header>
      <div class="flex items-center">
        <svg-icon local-icon="topic" />
        <span class="ml-10px text-16px">{{ $t('page.dashboard.hitokoto') }}</span>
      </div>
    </template>
    <!-- <template #header-extra>
      <hover-container class="w-64px h-full" placement="bottom-end" @click="getHitokotoData">
        <icon-mdi-refresh class="text-22px" :class="{ 'animate-spin': loading }" />
      </hover-container>
    </template> -->
    <template v-if="hitokotoData">
      <div class="text-center">
        <div class="mb-40px font-700 font-italic text-18px">“{{ hitokotoData.hitokoto }}”</div>
        <div class="mb-10px font-700 text-16px ">《{{ hitokotoData.from }}》</div>
        <div class="flex justify-center items-center">
          <div class="mr-10px h-1px w-30px bg-#ccc" />
          <div class="text-#999">{{ hitokotoData.from_who || '佚名' }}</div>
          <div class="ml-10px h-1px w-30px bg-#ccc" />
        </div>
      </div>
    </template>
  </n-card>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue'

// import { useLoading } from '@/hooks'
import { $t } from '@/locales'
import { HitokotoApi } from '@/service'

const hitokotoData = ref<ApiHitokoto.IGetHitokotoDataRes>({
  commit_from: 'api',
  created_at: '1672677945',
  creator: 'Jerry',
  creator_uid: 13499,
  from: '明日战记',
  from_who: '郑重生',
  hitokoto: '结局是什么，我们自己决定！',
  id: 9142,
  length: 13,
  reviewer: 4756,
  type: 'h',
  uuid: 'd362384f-8db7-4c2e-9bb7-ffe906395a63'
})

// const { loading, startLoading, endLoading } = useLoading()

onMounted(async () => {
  await getHitokotoData()
})

async function getHitokotoData() {
  // startLoading()

  const { data } = await HitokotoApi.getHitokotoData()
  if (data) {
    hitokotoData.value = data
  }

  // endLoading()
}
</script>
