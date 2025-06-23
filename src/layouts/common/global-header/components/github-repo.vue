<template>
  <hover-container class="w-40px h-full" tooltip-content="Github" :inverted="theme.header.inverted" @click="toGithub">
    <icon-ri:github-fill class="text-18px" />
  </hover-container>
</template>

<script lang="ts" setup>
import { GithubRepoUrl } from '@/constants/github'
import { useThemeStore } from '@/store'

const theme = useThemeStore()

function toGithub() {
  window.open(GithubRepoUrl, '_blank')
}
</script>
