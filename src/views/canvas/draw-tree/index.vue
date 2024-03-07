<template>
  <div class="h-full">
    <n-card :bordered="false" class="h-full rounded-8px shadow-sm bg-#9af0f3">
      <div class="h-full container-box">
        <div class="white-circle" />
        <div class="h-full canvas-box">
          <canvas ref="canvasRef" />
        </div>
      </div>
    </n-card>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue'

const canvasRef = ref<HTMLCanvasElement>()

onMounted(() => {
  const canvas = canvasRef.value as HTMLCanvasElement
  const box = canvas.parentNode as HTMLElement
  const ctx = canvas.getContext('2d') as CanvasRenderingContext2D
  console.log(box.offsetWidth, box.offsetHeight)
  canvas.width = box.offsetWidth
  canvas.height = box.offsetHeight

  ctx.translate(canvas.width / 2, canvas.height)
  ctx.scale(1, -1)
  drawBranch([0, 0], 16, 130, 90)

  function drawBranch(v0: number[], thick: number, length: number, dir: number) {
    if (thick < 6 && Math.random() < 0.3) {
      return
    }
    if (thick < 2) {
      ctx.beginPath()
      ctx.arc(v0[0], v0[1], Math.random() * 8, 0, 2 * Math.PI)
      ctx.fillStyle = Math.random() < 0.5 ? 'yellow' : 'red'
      ctx.fill()
      return
    }
    ctx.beginPath()
    ctx.moveTo(v0[0], v0[1])
    const v1 = [
      v0[0] + length * Math.cos((dir * Math.PI) / 180),
      v0[1] + length * Math.sin((dir * Math.PI) / 180)
    ]
    ctx.lineTo(v1[0], v1[1])
    ctx.strokeStyle = '#333'
    ctx.lineCap = 'round'
    ctx.lineWidth = thick
    ctx.stroke()

    drawBranch(v1, thick * 0.82, length * 0.8, dir + Math.random() * 30)
    drawBranch(v1, thick * 0.82, length * 0.8, dir - Math.random() * 30)
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
    z-index: 0;
  }

  .canvas-box {
    position: relative;
    z-index: 1;
  }
}
</style>