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
        '@': srcPath,
        '~': rootPath
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
      },
      outDir: 'dist',
      assetsDir: 'assets',
      chunkSizeWarningLimit: 2000, // 解决包大小超过500kb的正告
      rollupOptions: {
        output: {
          manualChunks: {},
          chunkFileNames: 'assets/[name]-[hash].js',
          entryFileNames: 'assets/[name]-[hash].js',
          assetFileNames: 'assets/[name]-[hash].[ext]',
          sanitizeFileName: (name) => {
            const match = DRIVE_LETTER_REGEX.exec(name)
            const driveLetter = match ? match[0] : ''
            return (
              driveLetter + name.slice(driveLetter.length).replace(INVALID_CHAR_REGEX, '') // 解决文件名中的非法字符
            )
          }
        }
      }
    }
  }
})
