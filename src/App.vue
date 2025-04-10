<template>
  <n-config-provider :theme="theme.naiveTheme" :theme-overrides="theme.naiveThemeOverrides" :locale="naiveLocale"
    :date-locale="naiveDateLocale" class="h-full">
    <naive-provider>
      <router-view />
    </naive-provider>
  </n-config-provider>
</template>

<script setup lang="ts">
import { computed } from 'vue'

import { useGlobalEvents } from '@/composables'
import { naiveLocales, naiveDateLocales } from '@/locales/naive'
import { useAppStore, subscribeStore, useThemeStore } from '@/store'

const appStore = useAppStore()

const theme = useThemeStore()

const naiveLocale = computed(() => {
  return naiveLocales[appStore.currentLocale]
})

const naiveDateLocale = computed(() => {
  return naiveDateLocales[appStore.currentLocale]
})

subscribeStore()
useGlobalEvents()
</script>
