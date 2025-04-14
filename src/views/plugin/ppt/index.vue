<template>
  <div class="h-full">
    <div class="h-full rounded-8px bg-#fff overflow-hidden reveal" ref="revealRef">
      <div class="slides">
        <section data-transition="fade" data-background-color="#CCFBFF">
          <section>幻灯片</section>
          <section>幻灯片</section>
          <section>幻灯片</section>
        </section>
        <section>幻灯片</section>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import Reveal from 'reveal.js'
import 'reveal.js/dist/reveal.css'
import 'reveal.js/dist/theme/white.css' // "black" 主題只是一個範例

const revealRef = ref()

const reveal = ref<Reveal.Api | null>(null)

onMounted(() => {
  reveal.value = new Reveal(revealRef.value!, {
    transition: 'slide',
    // 其他配置選項
    progress: false,
    slideNumber: 'c/t'
  })

  reveal.value.initialize({
  })
})
</script>