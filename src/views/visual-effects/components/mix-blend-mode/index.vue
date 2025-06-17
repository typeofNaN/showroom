<template>
  <div class="container-box">
    <div class="content" />
  </div>
</template>

<style lang="scss" scoped>
.container-box {
  width: 100%;
  height: 360px;
  display: flex;
  justify-content: center;
  align-items: center;

  .content {
    width: 600px;
    height: 160px;
    background-image: linear-gradient(45deg, #000 0, #000 50%, #fff 50%);
    position: relative;

    &::after {
      content: "Hello World";
      position: absolute;
      white-space: nowrap;
      top: 50%;
      left: 50%;
      font-size: 56px;
      transform: translate(-14%, -50%);
      color: #fff;
      mix-blend-mode: difference;
      animation: move 5s infinite linear;
    }

    @keyframes move {
      0% {
        transform: translate(-14%, -50%);
      }

      50% {
        transform: translate(-86%, -50%);
      }

      100% {
        transform: translate(-14%, -50%);
      }
    }
  }
}
</style>