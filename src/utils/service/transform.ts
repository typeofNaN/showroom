import { stringify } from 'qs'
import FormData from 'form-data'

import { isArray, isFile } from '../common'

/**
 * @description 请求数据的转换
 * @param { any } requestData - 请求数据
 * @param { UnionKey.ContentType } contentType - 请求头的Content-Type
 */
export async function transformRequestData(requestData: any, contentType?: UnionKey.ContentType) {
  // application/json类型不处理
  let data = requestData
  // form类型转换
  if (contentType === 'application/x-www-form-urlencoded') {
    data = stringify(requestData)
  }
  // form-data类型转换
  if (contentType === 'multipart/form-data') {
    data = await handleFormData(requestData)
  }

  return data
}

async function handleFormData(data: Record<string, any>) {
  const formData = new FormData()
  const entries = Object.entries(data)

  entries.forEach(async ([key, value]) => {
    const isFileType = isFile(value) || (isArray(value) && value.length && isFile(value[0]))

    if (isFileType) {
      await transformFile(formData, key, value)
    } else {
      formData.append(key, value)
    }
  })

  return formData
}

/**
 * @description 接口为上传文件的类型时数据转换
 * @param { FormData } formData
 * @param { string } key - 文件的属性名
 * @param { File[] | File } file - 单文件或多文件
 */
async function transformFile(formData: FormData, key: string, file: File[] | File) {
  if (isArray(file)) {
    // 多文件
    await Promise.all(
      (file as File[]).map(item => {
        formData.append(key, item)
        return true
      })
    )
  } else {
    // 单文件
    formData.append(key, file)
  }
}
