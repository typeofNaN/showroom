<template>
  <div class="h-full">
    <div class="h-full bg-#9af0f3 rounded-8px container-box">
      <div class="white-circle" />
      <div class="h-full relative">
        <canvas ref="canvasRef" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue'

const canvasRef = ref<HTMLCanvasElement>()

onMounted(() => {
  const canvas = canvasRef.value as HTMLCanvasElement
  const box = canvas.parentNode as HTMLElement
  const ctx = canvas.getContext('2d') as CanvasRenderingContext2D

  canvas.width = box.offsetWidth
  canvas.height = box.offsetHeight

  // 设置坐标
  ctx.translate(canvas.width / 2, canvas.height)
  ctx.scale(1, -1)

  drawBranch([0, 0], 16, 130, 90)

  /**
   * @description 画枝干
   * @param { number[] } v0 起始点坐标
   * @param { number } thick 枝干粗细
   * @param { number } length 枝干长度
   * @param { number } dir 枝干方向角度
   */
  function drawBranch(v0: number[], thick: number, length: number, dir: number) {
    // 随机终止
    if (thick < 6 && Math.random() < 0.3) {
      return
    }

    if (thick < 1.5) {
      // 画花朵
      ctx.beginPath()
      ctx.arc(v0[0], v0[1], Math.random() * 6, 0, 2 * Math.PI)
      ctx.fillStyle = 'pink'
      ctx.fill()
      return
    }

    // 目标点坐标
    const v1 = [
      v0[0] + length * Math.cos((dir * Math.PI) / 180),
      v0[1] + length * Math.sin((dir * Math.PI) / 180)
    ]

    ctx.beginPath()
    ctx.moveTo(v0[0], v0[1])
    ctx.lineTo(v1[0], v1[1])
    ctx.strokeStyle = '#333'
    ctx.lineCap = 'round'
    ctx.lineWidth = thick
    ctx.stroke()

    // 递归画左右枝干
    drawBranch(v1, thick * 0.8, length * 0.8, dir + Math.random() * 36)
    drawBranch(v1, thick * 0.8, length * 0.8, dir - Math.random() * 36)
  }
})
</script>

<style lang="scss" scoped>
.container-box {
  position: relative;
  overflow: hidden;

  .white-circle {
    position: absolute;
    bottom: 0;
    left: 50%;
    margin-left: -400px;
    margin-bottom: -150px;
    width: 800px;
    height: 800px;
    border-radius: 50%;
    background-color: #fff;
  }
}
</style>