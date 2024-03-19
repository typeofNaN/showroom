import { getServiceEnvConfig } from '~/.env-config'
import { createRequest } from './request'

const { url, proxyPattern } = getServiceEnvConfig(import.meta.env)

const isHttpProxy = import.meta.env.VITE_HTTP_PROXY === 'Y'

export const request = createRequest({ baseURL: isHttpProxy ? proxyPattern : url })

export const mockRequest = createRequest({ baseURL: '/mock' })

// Github API
export const githubRequest = createRequest({ baseURL: 'https://api.github.com' })

// 每日一言
export const hitokotoRequest = createRequest({ baseURL: 'https://v1.hitokoto.cn' })
