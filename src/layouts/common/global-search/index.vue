<template>
  <hover-container class="w-40px h-full" :tooltip-content="$t('common.search')" :inverted="theme.header.inverted"
    @click="toggle">
    <icon-uil-search />
    <search-modal v-model:show="show" />
  </hover-container>
</template>

<script lang="ts" setup>
import { useBoolean } from '@/hooks'
import { $t } from '@/locales'
import { useThemeStore } from '@/store'
import SearchModal from './components/search-modal.vue'

defineOptions({ name: 'GlobalSearch' })

const { bool: show, toggle } = useBoolean()
const theme = useThemeStore()
</script>
