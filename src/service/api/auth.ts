import { mockRequest } from '../request'

/**
 * 获取验证码
 * @param { string } phone - 手机号
 * @returns - 返回boolean值表示是否发送成功
 */
export function fetchSmsCode(phone: string) {
  return mockRequest.post<boolean>('/getSmsCode', { phone })
}

/**
 * @description 登录
 * @param { string } userName - 用户名
 * @param { string } password - 密码
 */
export function fetchLogin(userName: string, password: string) {
  return mockRequest.post<ApiAuth.Token>('/login', { userName, password })
}

/** 获取用户信息 */
export function fetchUserInfo() {
  return mockRequest.get<ApiAuth.UserInfo>('/getUserInfo')
}

/**
 * @description 获取用户路由数据
 * @description 后端根据用户id查询到对应的角色类型，并将路由筛选出对应角色的路由数据返回前端
 * @param { string } userId - 用户id
 */
export function fetchUserRoutes(userId: string) {
  return mockRequest.post<ApiRoute.Route>('/getUserRoutes', { userId })
}

/**
 * @description 刷新token
 * @param { string } refreshToken
 */
export function fetchUpdateToken(refreshToken: string) {
  return mockRequest.post<ApiAuth.Token>('/updateToken', { refreshToken })
}
