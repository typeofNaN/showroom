<template>
  <dark-mode-container class="flex-center h-full" :inverted="theme.footer.inverted">
    <span>©2024</span>
  </dark-mode-container>
</template>

<script setup lang="ts">
import { useThemeStore } from '@/store'

defineOptions({ name: 'GlobalFooter' })

const theme = useThemeStore()
</script>
