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
    <n-row v-if="emojisList.length > 0" :gutter="[10, 10]">
      <n-col v-for="i in emojisList" :span="4" :key="i.name">
        <n-card :bordered="false" hoverable class="rounded-8px shadow-sm">
          <div class="flex items-center h-40px">
            <n-image :src="i.url" lazy width="40" class="mr-10px" />
            <span>{{ i.name }}</span>
          </div>
        </n-card>
      </n-col>
    </n-row>
    <n-card v-else :bordered="false" class="rounded-8px shadow-sm">
      <div class="flex justify-center items-center h-500px">
        <n-empty v-if="isLoadingDone" :description="$t('common.noData')" size="huge" />
        <n-spin v-else size="large" />
      </div>
    </n-card>
  </n-space>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue'

import { $t } from '@/locales'

type Emojis = {
  name: string
  url: string
}

const inputValue = ref<string>('')

let originEmojisList: Emojis[] = []
const emojisList = ref<Emojis[]>([])
const isLoadingDone = ref<boolean>(false)

onMounted(async () => {
   await getGithubEmojisList()
})

async function getGithubEmojisList() {
  try {
    fetch('https://api.github.com/emojis')
      .then(res => res.json())
      .then(data => {
        if (data) {
          const list: Emojis[] = []
          for (let i in data) {
            list.push({
              name: i,
              url: data[i]
            })
          }

          emojisList.value = list
          originEmojisList = [...list]
          isLoadingDone.value = true
        }
      })
  } catch {
    isLoadingDone.value = true
  }
}

function handleInputChange(val: string) {
  if (val) {
    emojisList.value = originEmojisList.filter(emojis => emojis.name.includes(val.trim()))
  } else {
    emojisList.value = [...originEmojisList]
  }
}
</script>
