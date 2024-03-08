<template>
  <div class="emojis h-full">
    <n-row gutter="12">
      <n-col v-for="i in emojisList" :span="4" :key="i.name" class="mb-12px">
        <n-card :bordered="false" class="h-full rounded-8px shadow-sm">
          <div class="emojis-box">
            <div class="emojis-img">
              <n-image width="40" :src="i.url" lazy />
            </div>
            <div class="name">{{ i.name }}</div>
          </div>
        </n-card>
      </n-col>
    </n-row>
  </div>
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

<style lang="scss" scoped>
.emojis {
  overflow-y: auto;

  .emojis-box {
    display: flex;
    align-items: center;

    .emojis-img {
      margin-right: 10px;
      width: 40px;
      height: 40px;
    }
  }
}
</style>