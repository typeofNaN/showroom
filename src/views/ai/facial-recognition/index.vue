<template>
  <div class="h-full">
    <div ref="boxRef" class="face-api h-full rounded-8px overflow-hidden bg-#000">
      <video id="video" autoplay width="960" height="720" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onBeforeUnmount, onMounted, ref } from 'vue'
import * as faceApi from 'face-api.js'

const MODEL_PATH = import.meta.env.DEV ? '/models/faceapi' : `${import.meta.env.BASE_URL}models/faceapi`

const boxRef = ref<HTMLDivElement>()
let video = document.getElementById('video') as HTMLVideoElement
let timer: any

onMounted(() => {
  video = document.getElementById('video') as HTMLVideoElement
  video.addEventListener('play', detectFace)
  loadModels()
})

onBeforeUnmount(() => {
  clearInterval(timer)
  navigator.mediaDevices.getUserMedia({
    video: true
  }).then(mediaStream => {
    mediaStream.getVideoTracks().forEach(track => { track.stop() })
    video.srcObject = null
  })
})

async function getCamera() {
  try {
    const mediaStream = await navigator.mediaDevices.getUserMedia({
      video: true
    })
    video.srcObject = mediaStream
  } catch (e) {
    console.log(e)
  }
}

async function loadModels() {
  await faceApi.loadTinyFaceDetectorModel(MODEL_PATH)
  await faceApi.loadFaceLandmarkTinyModel(MODEL_PATH)
  await faceApi.loadFaceExpressionModel(MODEL_PATH)
  await faceApi.loadAgeGenderModel(MODEL_PATH)

  getCamera()
}

function detectFace() {
  const canvas = faceApi.createCanvasFromMedia(video)
  canvas.width = 960
  canvas.height = 720
  const ctx = canvas.getContext('2d') as CanvasRenderingContext2D
  const { width, height } = video
    ; (boxRef.value as HTMLDivElement).append(canvas)
  timer = setInterval(async () => {
    const detections = await faceApi
      .detectAllFaces(video, new faceApi.TinyFaceDetectorOptions())
      .withFaceLandmarks(true)
      .withFaceExpressions()
      .withAgeAndGender()

    const resizedDetections = faceApi.resizeResults(detections, { width, height })
    ctx.clearRect(0, 0, width, height)

    faceApi.draw.drawFaceLandmarks(canvas, resizedDetections)
    resizedDetections.forEach(result => {
      const { age, gender } = result
      new faceApi.draw
        .DrawTextField([`${gender === 'male' ? '男' : '女'} ${~~age} 岁`], result.detection.box.bottomLeft)
        .draw(canvas)
    })
  }, 300)
}
</script>

<style lang="scss">
.face-api {
  position: relative;

  video {
    position: absolute;
    object-fit: cover;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  canvas {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}
</style>