<template>
  <n-space vertical :size="16">
    <n-row :gutter="[10, 10]">
      <n-col v-for="i in emojisList" :span="4" :key="i.name">
        <n-card :bordered="false" class="rounded-8px shadow-sm">
          <div class="flex items-center">
            <n-image width="40" :src="i.url" lazy class="mr-10px" />
            <span>{{ i.name }}</span>
          </div>
        </n-card>
      </n-col>
    </n-row>
  </n-space>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue'

type Emojis = {
  name: string
  url: string
}

const emojisList = ref<Emojis[]>([])

onMounted(() => {
  getGithubEmojisList()
})

async function getGithubEmojisList() {
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
      }
    })
}
</script>
