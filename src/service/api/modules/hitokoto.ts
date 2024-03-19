import { hitokotoRequest } from '../../request'

/**
 * @description HitokotoApi
 */
export class HitokotoApi {
  /**
   * @description 获取每日一言数据
   */
  public static getHitokotoData() {
    return hitokotoRequest.get<ApiHitokoto.IGetHitokotoDataRes>(
      '/?c=d&c=e&c=h&c=i&c=k',
      {
        transformResponse: res => {
          return {
            code: 200,
            data: res ? JSON.parse(res) : null
          }
        }
      }
    )
  }
}