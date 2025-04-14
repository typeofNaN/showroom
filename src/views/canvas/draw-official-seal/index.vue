<template>
  <div class="flex-col-stretch gap-16px overflow-hidden lt-sm:overflow-auto">
    <n-card :title="$t('routes.canvas.drawOfficialSeal')" :bordered="false" class="h-full">
      <n-row class="h-full">
        <n-col :span="12">
          <div class="h-full flex-center">
            <n-form ref="formRef" :model="formModel" :rules="formRules" label-placement="left" label-width="140px"
              require-mark-placement="left">
              <n-form-item :label="$t('page.canvas.drawOfficialSeal.companyNameLabel')" path="companyName">
                <n-input v-model:value="formModel.companyName"
                  :placeholder="$t('page.canvas.drawOfficialSeal.companyNamePlaceholder')" />
              </n-form-item>
              <n-form-item :label="$t('page.canvas.drawOfficialSeal.sealNameLabel')" path="sealName">
                <n-input v-model:value="formModel.sealName"
                  :placeholder="$t('page.canvas.drawOfficialSeal.sealNamePlaceholder')" />
              </n-form-item>
              <n-form-item label=" ">
                <n-button-group>
                  <n-button type="primary" @click="newSeal">
                    <template #icon>
                      <svg-icon icon="mingcute:seal-line" />
                    </template>
                    {{ $t('page.canvas.drawOfficialSeal.createSeal') }}
                  </n-button>
                  <n-button type="warning" @click="downloadSeal">
                    <template #icon>
                      <svg-icon icon="material-symbols:download" />
                    </template>
                    {{ $t('page.canvas.drawOfficialSeal.downloadSeal') }}
                  </n-button>
                </n-button-group>
              </n-form-item>
            </n-form>
          </div>
        </n-col>
        <n-col :span="12">
          <div class="h-full flex-center">
            <canvas ref="canvasRef" />
          </div>
        </n-col>
      </n-row>
    </n-card>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue'

import { $t } from '@/locales'

const formRef = ref()
const canvasRef = ref<HTMLCanvasElement>()
const formModel = ref({
  companyName: '某某测试有限公司',
  sealName: '测试专用章'
})

const formRules = ref({
  companyName: {
    required: true,
    message: $t('page.canvas.drawOfficialSeal.companyNameValidTip'),
    trigger: ['input', 'blur']
  },
  sealName: {
    required: true,
    message: $t('page.canvas.drawOfficialSeal.sealNameValidTip'),
    trigger: ['input', 'blur']
  }
})

onMounted(() => {
  createSeal()
})

function createSeal() {
  const canvas = canvasRef.value as HTMLCanvasElement
  const ctx = canvas.getContext('2d') as CanvasRenderingContext2D

  canvas.width = 250
  canvas.height = 250

  // 绘制印章边框
  const centerX = canvas.width / 2
  const centerY = canvas.height / 2
  ctx.lineWidth = 5
  ctx.strokeStyle = '#f00'
  ctx.beginPath()
  ctx.arc(centerX, centerY, 110, 0, Math.PI * 2)
  ctx.stroke()

  // 画五角星
  create5star(ctx, centerX, centerY, 30, '#f00', 0)

  // 绘制印章名称
  ctx.font = '20px Helvetica'
  ctx.textBaseline = 'middle' // 设置文本的垂直对齐方式
  ctx.textAlign = 'center' // 设置文本的水平对对齐方式
  ctx.lineWidth = 1
  ctx.fillStyle = '#f00'
  ctx.fillText(formModel.value.sealName, centerX, centerY + 65)

  // 绘制印章单位
  ctx.translate(centerX, centerY) // 平移到此位置,
  ctx.font = '24px Helvetica'
  const count = formModel.value.companyName.length // 字数
  const angle = 4 * Math.PI / (3 * (count - 1)) // 字间角度
  const chars = formModel.value.companyName.split('')
  let c = ''
  for (let i = 0; i < count; i++) {
    c = chars[i] // 需要绘制的字符
    if (i == 0) {
      ctx.rotate(5 * Math.PI / 6)
    } else {
      ctx.rotate(angle)
    }
    ctx.save()
    ctx.translate(90, 0) // 平移到此位置,此时字和x轴垂直
    ctx.rotate(Math.PI / 2) // 旋转90度,让字平行于x轴
    ctx.fillText(c, 0, 5) // 此点为字的中心点
    ctx.restore()
  }

  /**
   * 绘制五角星
   * 创建一个五角星形状. 该五角星的中心坐标为(sx,sy),中心到顶点的距离为radius,rotate=0时一个顶点在对称轴上
   * rotate:绕对称轴旋转rotate弧度
   */
  function create5star(
    ctx: CanvasRenderingContext2D,
    sx: number,
    sy: number,
    radius: number,
    color: string,
    rotate: number
  ) {
    ctx.save()
    ctx.fillStyle = color
    ctx.translate(sx, sy) // 移动坐标原点
    ctx.rotate(Math.PI + rotate) // 旋转
    ctx.beginPath() // 创建路径
    let x = Math.sin(0)
    let y = Math.cos(0)
    const dig = Math.PI / 5 * 4
    for (let i = 0; i < 5; i++) { // 画五角星的五条边
      x = Math.sin(i * dig)
      y = Math.cos(i * dig)
      ctx.lineTo(x * radius, y * radius)
    }
    ctx.closePath()
    ctx.stroke()
    ctx.fill()
    ctx.restore()
  }
}

async function newSeal() {
  await formRef.value?.validate()

  createSeal()
}

function downloadSeal() {
  try {
    const canvas = canvasRef.value as HTMLCanvasElement
    const base64Img = canvas.toDataURL('image/png')
    const a = document.createElement('a')
    a.download = 'seal.png'
    a.href = base64Img
    a.click()
    window.$message?.success($t('common.download.success'))
  } catch {
    window.$message?.error($t('common.download.fail'))
  }
}
</script>