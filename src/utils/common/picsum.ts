/**
 * @description picsum url
 */
export const PICSUM_URL = 'https://picsum.photos'

/**
 * @description 获取picsum随机图
 * @param { number } width 宽度
 * @param { number } height 高度
 * @param { string } query 参数
 * @returns { string } result picsum url
 */
export function getPicsumUrl(width: number, height: number, query?: string): string {
  if (query) {
    return `${PICSUM_URL}/${width}/${height}?${query}=`
  }
  return `${PICSUM_URL}/${width}/${height}`
}
