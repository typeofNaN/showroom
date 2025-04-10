<template>
  <n-scrollbar>
    <div class="pb-12px">
      <template v-for="item in options" :key="item.routePath">
        <div
          class="mt-8px h-56px flex-y-center cursor-pointer justify-between rounded-4px bg-#e5e7eb px-14px dark:bg-dark"
          :style="{
            background: item.path === active ? theme.themeColor : '',
            color: item.path === active ? '#fff' : ''
          }" @click="handleTo" @mouseenter="handleMouseEnter(item)">
          <component :is="item.meta.icon" />
          <span class="ml-5px flex-1">
            {{ (item.meta.i18nTitle && $t(item.meta.i18nTitle)) || item.meta.title }}
          </span>
          <icon-ant-design-enter-outlined class="icon mr-3px p-2px text-20px" />
        </div>
      </template>
    </div>
  </n-scrollbar>
</template>

<script lang="ts" setup>
import { $t } from '@/locales'
import { useThemeStore } from '@/store/modules/theme'

defineOptions({ name: 'SearchResult' })

interface Props {
  options: AuthRoute.Route[]
}

defineProps<Props>()

interface Emits {
  (e: 'enter'): void
}

const emit = defineEmits<Emits>()

const theme = useThemeStore()

const active = defineModel<string>('path', { required: true })

async function handleMouseEnter(item: AuthRoute.Route) {
  active.value = item.path
}

function handleTo() {
  emit('enter')
}
</script>
