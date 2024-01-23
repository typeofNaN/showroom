<template>
  <router-link :to="routeHomePath" class="flex-center w-full nowrap-hidden">
    <h2 v-show="showTitle" class="pl-8px text-16px font-bold text-primary transition duration-300 ease-in-out">
      {{ $t('system.title') }}
    </h2>
  </router-link>
</template>

<script setup lang="ts">
import { $t } from '@/locales'
import { routePath } from '@/router'

defineOptions({ name: 'GlobalLogo' })

interface Props {
  /** 显示名字 */
  showTitle: boolean
}

defineProps<Props>()

const routeHomePath = routePath('root')
</script>
