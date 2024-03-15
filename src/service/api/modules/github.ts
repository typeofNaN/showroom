import { githubRequest } from '../../request'

/**
 * @description GithubApi
 */
export class GithubApi {
  /**
   * @description 获取emojis列表
   */
  public static getEmojisList() {
    return githubRequest.get<Record<string, string>>(
      '/emojis',
      {
        transformResponse: res => {
          return {
            code: 200,
            data: JSON.parse(res)
          }
        }
      }
    )
  }
}