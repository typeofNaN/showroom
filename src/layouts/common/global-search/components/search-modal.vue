<template>
  <n-modal v-model:show="visible" :segmented="{ footer: 'soft' }" :closable="false" preset="card" auto-focus
    footer-style="padding: 0; margin: 0" class="fixed left-0 right-0 w-630px top-50px" @after-leave="handleClose">
    <n-input-group>
      <n-input v-model:value="keyword" clearable :placeholder="$t('common.keywordSearch')" @input="handleSearch">
        <template #prefix>
          <icon-uil-search class="text-15px text-#c2c2c2" />
        </template>
      </n-input>
    </n-input-group>
    <div class="mt-20px">
      <n-empty v-if="resultOptions.length === 0" :description="$t('common.noData')" />
      <search-result v-else v-model:path="activePath" :options="resultOptions" @enter="handleEnter" />
    </div>
    <template #footer>
      <search-footer />
    </template>
  </n-modal>
</template>

<script lang="ts" setup>
import { ref, shallowRef } from 'vue'
import { useRouter } from 'vue-router'
import { onKeyStroke, useDebounceFn } from '@vueuse/core'

import { $t } from '@/locales'
import { useRouteStore } from '@/store/modules/route'
import SearchResult from './search-result.vue'
import SearchFooter from './search-footer.vue'

defineOptions({ name: 'SearchModal' })

const router = useRouter()
const routeStore = useRouteStore()

const keyword = ref('')
const activePath = ref('')
const resultOptions = shallowRef<AuthRoute.Route[]>([])

const handleSearch = useDebounceFn(search, 300)

const visible = defineModel<boolean>('show', { required: true })

function search() {
  resultOptions.value = routeStore.searchMenus.filter(menu => {
    const trimKeyword = keyword.value.toLocaleLowerCase().trim()
    const title = (menu.meta.i18nTitle ? $t(menu.meta.i18nTitle) : menu.meta.title).toLocaleLowerCase()
    return trimKeyword && title.includes(trimKeyword)
  })
  activePath.value = resultOptions.value[0]?.path ?? ''
}

function handleClose() {
  // handle with setTimeout to prevent user from seeing some operations
  setTimeout(() => {
    visible.value = false
    resultOptions.value = []
    keyword.value = ''
  }, 200)
}

/** key up */
function handleUp() {
  const { length } = resultOptions.value
  if (length === 0) return

  const index = getActivePathIndex()
  if (index === -1) return

  const activeIndex = index === 0 ? length - 1 : index - 1

  activePath.value = resultOptions.value[activeIndex].path
}

/** key down */
function handleDown() {
  const { length } = resultOptions.value
  if (length === 0) return

  const index = getActivePathIndex()
  if (index === -1) return

  const activeIndex = index === length - 1 ? 0 : index + 1

  activePath.value = resultOptions.value[activeIndex].path
}

function getActivePathIndex() {
  return resultOptions.value.findIndex(item => item.path === activePath.value)
}

/** key enter */
function handleEnter() {
  if (resultOptions.value?.length === 0 || activePath.value === '') return
  handleClose()
  router.push(activePath.value)
}

function registerShortcut() {
  onKeyStroke('Escape', handleClose)
  onKeyStroke('Enter', handleEnter)
  onKeyStroke('ArrowUp', handleUp)
  onKeyStroke('ArrowDown', handleDown)
}

registerShortcut()
</script>
