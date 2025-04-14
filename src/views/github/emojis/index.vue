<template>
  <n-space vertical :size="16">
    <n-card :bordered="false" class="rounded-8px shadow-sm">
      <n-input v-model:value="inputValue" type="text" :placeholder="$t('common.pleaseInputSearchValue')"
        @input="handleInputChange">
        <template #prefix>
          <svg-icon icon="ph:magnifying-glass" />
        </template>
      </n-input>
    </n-card>
    <div v-if="loading" class="flex-center h-500px">
      <n-spin size="large" />
    </div>
    <template v-else>
      <n-row v-if="emojisList.length > 0" :gutter="[16, 16]">
        <n-col v-for="i in emojisList" :span="4" :key="i.name">
          <n-card :bordered="false" hoverable class="rounded-8px shadow-sm">
            <div class="flex items-center h-40px cursor-copy" @click="copy(i.name)">
              <n-image :src="i.url" lazy preview-disabled width="40" class="mr-10px" />
              <span>{{ i.name }}</span>
            </div>
          </n-card>
        </n-col>
      </n-row>
      <n-card v-else :bordered="false" class="rounded-8px shadow-sm">
        <div class="flex-center h-500px">
          <n-empty :description="$t('common.noData')" size="huge" />
        </div>
      </n-card>
    </template>
  </n-space>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import { cloneDeep } from 'lodash-es'

import { useClipboard, useLoading } from '@/hooks'
import { $t } from '@/locales'
import { GithubApi } from '@/service'

type Emojis = {
  name: string
  url: string
}

const { loading, startLoading, endLoading } = useLoading(true)
const { copyText } = useClipboard()

const inputValue = ref<string>('')

let originEmojisList: Emojis[] = []
const emojisList = ref<Emojis[]>([])

onMounted(async () => {
  await getGithubEmojisList()
})

async function getGithubEmojisList() {
  startLoading()
  const { data } = await GithubApi.getEmojisList()

  if (data) {
    const list: Emojis[] = []
    for (let i in data) {
      list.push({
        name: i,
        url: data[i]
      })
    }

    emojisList.value = list
    originEmojisList = cloneDeep(list)
  }
  endLoading()
}

function handleInputChange(val: string) {
  emojisList.value = val
    ? originEmojisList.filter(emojis => emojis.name.includes(val.trim()))
    : cloneDeep(originEmojisList)
}

function copy(text: string) {
  copyText(`:${text}:`)
}
</script>
