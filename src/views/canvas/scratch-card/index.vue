<template>
  <div class="h-full">
    <div class="container-box" ref="containerRef">
      <div class="flex-center absolute top-0 left-0 w-full h-full text-120px text-center text-#fff z-1">Hello World
      </div>
      <canvas class="absolute top-0 left-0 w-full h-full z-2" @mousedown="onMouseDown" @mousemove="onMouseMove"
        @mouseup="onMouseUp" ref="canvasRef" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'

let ctxRef: CanvasRenderingContext2D | null = null
let startPoint: { x: number; y: number } | null = null
let isDraw: boolean = false

const containerRef = ref<HTMLDivElement>()
const canvasRef = ref<HTMLCanvasElement>()

const onMouseDown = (e: MouseEvent) => {
  isDraw = true
  const x = e.offsetX
  const y = e.offsetY
  startPoint = { x, y }
}

const onMouseMove = (e: MouseEvent) => {
  if (isDraw && ctxRef && startPoint) {
    const x = e.offsetX
    const y = e.offsetY
    ctxRef.beginPath()
    ctxRef.globalCompositeOperation = 'destination-out'
    ctxRef.lineCap = 'round'
    ctxRef.moveTo(startPoint.x, startPoint.y)
    ctxRef.lineTo(x, y)
    ctxRef.lineWidth = 40
    ctxRef.stroke()
    ctxRef.closePath()
    startPoint = { x, y }
  }
}

const onMouseUp = () => {
  isDraw = false
  startPoint = null
}

watch(
  [containerRef, canvasRef],
  () => {
    if (containerRef.value && canvasRef.value) {
      const { clientWidth, clientHeight } = containerRef.value
      canvasRef.value.width = clientWidth
      canvasRef.value.height = clientHeight
      ctxRef = canvasRef.value.getContext('2d')
      if (ctxRef) {
        ctxRef.fillStyle = 'darkgray'
        ctxRef.fillRect(0, 0, clientWidth, clientHeight)
      }
    }
  },
  { immediate: true }
)
</script>

<style scoped lang="scss">
.container-box {
  --uno: relative w-full h-full rounded-8px overflow-hidden;
  box-sizing: border-box;
  $itemWidth: 12px;
  $color1: #fdf1cc;
  $color2: #987f69;
  $g: $color1 3.125%, $color2 0 9.375%, $color1 0 15.625%, $color2 0 21.875%, $color1 0 28.125%, #0000 0;
  background: linear-gradient(225deg,
      #0000 3.125%,
      $color2 0 9.375%,
      #0000 0 78.125%,
      $color2 0 84.375%,
      #0000 0) 0 calc($itemWidth / 2),
    linear-gradient(45deg, $g) 0 $itemWidth,
    linear-gradient(45deg, $g) calc($itemWidth / -2) calc($itemWidth / -2),
    linear-gradient(225deg, $g) $itemWidth 0,
    linear-gradient(225deg, $g) calc($itemWidth / 2) $itemWidth,
    repeating-linear-gradient(-45deg, $color1 -3.125% 3.125%, $color2 0 9.375%);
  background-size: calc(2 * $itemWidth) calc(2 * $itemWidth);
}
</style>