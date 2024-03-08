<template>
  <div class="h-full">
    <div class="h-full bg-#000 rounded-8px overflow-hidden">
      <canvas ref="canvasRef" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue'

type Cell = {
  x: number
  y: number
  char: string
}

type Rain = Cell[]

const FONT_SIZE = 32
const RATE = 0.9
const FPS = 30
const FRAME_INTERVAL = 1000 / FPS
const CHARACTERS = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '$', '@', '#', '&', '+', '-', '*', '/', '=', '%', '.', ';', ':', '?', '!', '\\', '|', '{', '}', '<', '>', '[', ']', '^', '~'] as const

const canvasRef = ref<HTMLCanvasElement>()

onMounted(() => {
  const canvas = canvasRef.value as HTMLCanvasElement
  const box = canvas.parentNode as HTMLElement

  canvas.width = box.offsetWidth
  canvas.height = box.offsetHeight

  const columns = box.offsetWidth / FONT_SIZE
  let lastTime = 0
  let timer = 0

  const ctx = canvas.getContext('2d') as CanvasRenderingContext2D
  ctx.font = `${FONT_SIZE}px monospace`

  const rain: Rain = createRain(columns)
  renderRain(rain, ctx, timer)

  function createRain(columns: number): Rain {
    const rain: Rain = []

    for (let i = 0; i < columns; i++) {
      const cell: Cell = {
        x: i,
        y: 0,
        char: ''
      }
      rain.push(cell)
    }

    return rain
  }

  function renderRain(rain: Rain, ctx: CanvasRenderingContext2D, timestamp: number): void {
    const randomFromArray = <T>(array: readonly T[]): T => array[Math.floor(Math.random() * array.length)]

    const deltaTime = timestamp - lastTime
    lastTime = timestamp

    if (timer > FRAME_INTERVAL) {
      timer = 0
      ctx.fillStyle = 'rgba(0, 0, 0, .1)'
      ctx.fillRect(0, 0, box.offsetWidth, box.offsetHeight)
      ctx.fillStyle = 'green'

      rain.forEach(cell => {
        cell.char = randomFromArray(CHARACTERS)
        ctx.fillText(cell.char, cell.x * FONT_SIZE, cell.y * FONT_SIZE)

        if (cell.y * FONT_SIZE > box.offsetHeight && Math.random() > RATE) {
          cell.y = 0
        } else {
          cell.y++
        }
      })
    } else {
      timer += deltaTime
    }

    requestAnimationFrame(t => {
      renderRain(rain, ctx, t)
    })
  }
})
</script>
