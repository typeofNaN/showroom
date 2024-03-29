import type { PluginOption } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import unocss from '@unocss/vite'
import VueDevtools from 'vite-plugin-vue-devtools'
import pageRoute from '@soybeanjs/vite-plugin-vue-page-route'

import unplugin from './unplugin'

/**
 * @description vite插件
 * @param { ImportMetaEnv } viteEnv - 环境变量配置
 */
export function setupVitePlugins(viteEnv: ImportMetaEnv): (PluginOption | PluginOption[])[] {
  const plugins = [
    vue({
      script: {
        defineModel: true
      }
    }),
    vueJsx(),
    VueDevtools(),
    ...unplugin(viteEnv),
    unocss()
  ]

  if (viteEnv.VITE_APP_ROUTE_PLUGIN === 'Y') {
    plugins.push(pageRoute())
  }

  return plugins
}
