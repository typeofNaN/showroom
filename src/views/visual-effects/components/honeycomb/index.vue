<template>
  <div class="container-box">
    <div class="content">
      <img v-for="i in 7" :key="i" :src="PicsumImage.randomImage(600, 600, true)" alt="" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { PicsumImage } from 'picsum-image'
</script>

<style lang="scss" scoped>
.container-box {
  --uno: flex-center w-full;

  .content {
    --s: 130px;
    /* control the size */
    --g: 10px;
    /* control the gap */
    display: grid;
    margin: calc(var(--s) + var(--g));

    img {
      grid-area: 1/1;
      width: var(--s);
      aspect-ratio: 0.866;
      object-fit: cover;
      clip-path: polygon(0% 25%, 0% 75%, 50% 100%, 100% 75%, 100% 25%, 50% 0);
      transform: translate(var(--x, 0), var(--y, 0)) scale(var(--t, 1));
      cursor: pointer;
      filter: grayscale(80%);
      transition: 0.2s linear;

      &:nth-child(1) {
        --x: calc(-100% - var(--g));
      }

      &:nth-child(7) {
        --x: calc(100% + var(--g));
      }

      &:nth-child(3),
      &:nth-child(5) {
        --y: calc(-75% - 0.87 * var(--g));
      }

      &:nth-child(4),
      &:nth-child(6) {
        --y: calc(75% + 0.87 * var(--g));
      }

      &:nth-child(3),
      &:nth-child(4) {
        --x: calc(-50% - 0.5 * var(--g));
      }

      &:nth-child(5),
      &:nth-child(6) {
        --x: calc(50% + 0.5 * var(--g));
      }

      &:hover {
        filter: grayscale(0);
        z-index: 1;
        --t: 1.2;
      }
    }
  }
}
</style>
