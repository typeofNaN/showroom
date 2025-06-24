<template>
  <hover-container class="w-40px h-full" tooltip-content="Github" :inverted="theme.header.inverted" @click="toGithub">
    <icon-ri:github-fill class="text-18px" />
  </hover-container>
</template>

<script lang="ts" setup>
import { useThemeStore } from '@/store'
import packageJson from '~/package.json'

const theme = useThemeStore()

function toGithub() {
  window.open(packageJson.homepage, '_blank')
}
</script>
