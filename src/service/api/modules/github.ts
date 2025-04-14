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

  /**
   * @description 获取共有仓库
   * @param { string } username Github 用户名
   */
  public static getPublicRepo(username: string) {
    return githubRequest.get<any>(
      `/search/repositories?q=user:${username}+fork:false`,
      {
        transformResponse: res => {
          return {
            code: 200,
            data: JSON.parse(res).items.map(({ name }: any) => name)
          }
        }
      }
    )
  }

  /**
   * @description 获取仓库语言
   * @param { string } username Github 用户名
   * @param { string } repoName 仓库名
   */
  public static getRepoLanguage(username: string, repoName: string) {
    return githubRequest.get(
      `/repos/${username}/${repoName}/languages`,
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