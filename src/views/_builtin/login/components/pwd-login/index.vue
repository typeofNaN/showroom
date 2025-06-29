<template>
  <n-form ref="formRef" :model="model" :rules="rules" size="large" :show-label="false">
    <n-form-item path="userName">
      <n-input v-model:value="model.userName" :placeholder="$t('page.login.common.userNamePlaceholder')" />
    </n-form-item>
    <n-form-item path="password">
      <n-input v-model:value="model.password" type="password" show-password-on="click"
        :placeholder="$t('page.login.common.passwordPlaceholder')" />
    </n-form-item>
    <n-space :vertical="true" :size="24">
      <div class="flex-y-center justify-between">
        <n-checkbox v-model:checked="rememberMe">{{ $t('page.login.pwdLogin.rememberMe') }}</n-checkbox>
        <n-button :text="true" @click="toLoginModule('reset-pwd')">
          {{ $t('page.login.pwdLogin.forgetPassword') }}
        </n-button>
      </div>
      <n-button type="primary" size="large" :block="true" :round="true" :loading="auth.loginLoading"
        @click="handleSubmit">
        {{ $t('page.login.common.confirm') }}
      </n-button>
      <div class="flex-y-center justify-between">
        <n-button class="flex-1" :block="true" @click="toLoginModule('code-login')">
          {{ loginModuleLabels['code-login'] }}
        </n-button>
        <div class="w-12px" />
        <n-button class="flex-1" :block="true" @click="toLoginModule('register')">
          {{ loginModuleLabels.register }}
        </n-button>
      </div>
    </n-space>
    <other-account @login="handleLoginOtherAccount" />
  </n-form>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import type { FormInst, FormRules } from 'naive-ui'

import { useRouterPush } from '@/composables'
import { loginModuleLabels } from '@/constants'
import { useAuthStore } from '@/store'
import { formRules } from '@/utils'
import { OtherAccount } from './components'

const auth = useAuthStore()
const { login } = useAuthStore()
const { toLoginModule } = useRouterPush()

const formRef = ref<HTMLElement & FormInst>()

const model = reactive({
  userName: 'Admin',
  password: 'admin123'
})

const rules: FormRules = {
  password: formRules.pwd
}

const rememberMe = ref(false)

async function handleSubmit() {
  await formRef.value?.validate()

  const { userName, password } = model

  login(userName, password)
}

function handleLoginOtherAccount(param: { userName: string; password: string }) {
  const { userName, password } = param
  login(userName, password)
}
</script>
