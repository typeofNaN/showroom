<template>
  <div class="container-box" />
</template>

<style lang="scss" scoped>
.container-box {
  --uno: w-full h-full flex-center relative bg-white dark:bg-black;
  filter: contrast(10);

  &::before {
    --uno: bg-black dark:bg-white;
    content: "";
    position: absolute;
    width: 130px;
    height: 130px;
    border-radius: 50%;
    left: 50%;
    top: 50%;
    margin-top: -65px;
    margin-left: -150px;
    animation: moveToRight 5s linear infinite;
    filter: blur(5px);
  }

  &::after {
    content: "";
    position: absolute;
    width: 90px;
    height: 90px;
    border-radius: 50%;
    right: 50%;
    top: 50%;
    margin-top: -45px;
    margin-right: -110px;
    background-color: red;
    animation: moveToLeft 5s linear infinite;
    filter: blur(5px);
  }

  @keyframes moveToRight {
    50% {
      margin-left: 0px;
    }
  }

  @keyframes moveToLeft {
    50% {
      margin-right: 0px;
    }
  }
}
</style>
