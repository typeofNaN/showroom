<template>
  <div class="h-full">
    <div class="h-full flex-center flex-col bg-#ccc rounded-8px overflow-hidden">
      <canvas ref="canvasRef" width="600px" height="600px" />
      <div class="mt-30px w-400px flex flex-justify-between">
        <n-button type="primary" @click="newGame">开始/重置</n-button>
        <n-button type="warning" @click="goBack">悔棋</n-button>
        <n-button type="error" @click="cancelGoBack">撤销悔棋</n-button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue'

import { Gobang } from './gobang'

const canvasRef = ref()
const gobangGame = ref()

onMounted(() => {
  gobangGame.value = new Gobang({
    role: 2,
    canvas: canvasRef.value,
    gobangStyle: {
      padding: 30,
      count: 16
    }
  })
})

function newGame() {
  gobangGame.value.resetAndInit()
}

function goBack() {
  gobangGame.value.regretChess()
}

function cancelGoBack() {
  gobangGame.value.revokedRegretChess()
}
</script>