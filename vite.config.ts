import { defineConfig, loadEnv } from 'vite'

import {
  createViteProxy,
  getRootPath,
  getSrcPath,
  setupVitePlugins
} from './build'
import { getServiceEnvConfig } from './.env-config'

const INVALID_CHAR_REGEX = /[\u0000-\u001F"#$&*+,:;<=>?[\]^`{|}\u007F]/g
const DRIVE_LETTER_REGEX = /^[a-z]:/i

export default defineConfig(configEnv => {
  const viteEnv = loadEnv(configEnv.mode, process.cwd()) as unknown as ImportMetaEnv

  const rootPath = getRootPath()
  const srcPath = getSrcPath()

  const isOpenProxy = viteEnv.VITE_HTTP_PROXY === 'Y'
  const envConfig = getServiceEnvConfig(viteEnv)

  return {
    base: viteEnv.VITE_BASE_URL,
    resolve: {
      alias: {
        '~': rootPath,
        '@': srcPath
      }
    },
    plugins: setupVitePlugins(viteEnv),
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@use "./src/styles/scss/global.scss" as *;`
        }
      }
    },
    server: {
      host: '0.0.0.0',
      port: 3200,
      open: false,
      proxy: createViteProxy(isOpenProxy, envConfig)
    },
    optimizeDeps: {
      include: ['@better-scroll/core']
    },
    build: {
      reportCompressedSize: false,
      sourcemap: false,
      commonjsOptions: {
        ignoreTryCatch: false
      }
    },
    chunkSizeWarningLimit: 2000,
    rollupOptions: {
      input: {
        index: 'index.html'
      },
      // 静态资源分类打包
      output: {
        chunkFileNames: 'static/js/[name]-[hash].js',
        entryFileNames: 'static/js/[name]-[hash].js',
        assetFileNames: 'static/[ext]/[name]-[hash].[ext]',
        // TODO: 处理GitHub Pages 部署 _plugin-vue_export-helper.js 404
        // https://github.com/rollup/rollup/blob/master/src/utils/sanitizeFileName.ts
        sanitizeFileName(name: any) {
          const match = DRIVE_LETTER_REGEX.exec(name)
          const driveLetter = match ? match[0] : ''
          // A `:` is only allowed as part of a windows drive letter (ex: C:\foo)
          // Otherwise, avoid them because they can refer to NTFS alternate data streams.
          return driveLetter + name.slice(driveLetter.length).replace(INVALID_CHAR_REGEX, '')
        },
        manualChunks(id: any) {
          if (id.includes('node_modules')) {
            return id.toString().match(/\/node_modules\/(?!.pnpm)(?<moduleName>[^\/]*)\//)?.groups!.moduleName ?? 'vender'
          }
        }
        // manualChunks(id) {
        //   if (id.includes('node_modules')) {
        //     return id.toString().split('node_modules/')[1].split('/')[0].toString()
        //   }
        // }
      }
    }
  }
})
