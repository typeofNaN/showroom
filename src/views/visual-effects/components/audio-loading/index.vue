<template>
  <div class="container-box">
    <div class="content">
      <span v-for="(_, index) in list" :key="index" :class="`span${index}`" />
    </div>
  </div>
</template>

<script lang="ts" setup>
const list = new Array(15).fill(0)
</script>

<style lang="scss" scoped>
.container-box {
  --uno: flex-center w-full h-full;

  $height: 80px;
  $gap: 15px;

  .content {
    display: flex;
    align-items: center;
    height: $height;
    position: relative;

    $spanWidth: 4px;
    $spanNum: 15;

    @for $i from 0 to $spanNum {
      .span#{$i} {
        width: 4px;
        height: 20%;
        border-radius: calc($height * 0.2 * 0.5);
        background-image: linear-gradient(to top, #d299c2 0%, #fef9d7 100%);
        animation: loading 2.5s infinite linear;
        $delay: calc(floor(abs(calc($spanNum / 2 - $i))));
        animation-delay: calc(0.2s * $delay);

        &:not(:first-child) {
          margin-left: 4px;
        }
      }
    }

    @keyframes loading {
      0% {
        background-image: linear-gradient(to right, #fa709a 0%, #fee140 100%);
        height: 20%;
        border-radius: calc($height * 0.2 * 0.5);
      }

      50% {
        background-image: linear-gradient(to top, #d299c2 0%, #fef9d7 100%);
        height: 100%;
        border-radius: calc($height * 1 * 0.5);
      }

      100% {
        background-image: linear-gradient(to top, #a8edea 0%, #fed6e3 100%);
        height: 20%;
        border-radius: calc($height * 0.2 * 0.5);
      }
    }
  }
}
</style>
