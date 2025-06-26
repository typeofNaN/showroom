<template>
  <dark-mode-container class="flex-center gap-10px h-full" :inverted="theme.footer.inverted">
    <a :href="packageJson.author.url" target="_blank" class="text-primary cursor-pointer">
      ©{{ packageJson.author.name }}
    </a>
    <span>- 2024</span>
  </dark-mode-container>
</template>

<script lang="ts" setup>
import { useThemeStore } from '@/store'
import packageJson from '~/package.json'

defineOptions({ name: 'GlobalFooter' })

const theme = useThemeStore()
</script>
