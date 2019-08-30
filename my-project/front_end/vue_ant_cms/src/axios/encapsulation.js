import qs from 'qs'
import service from './interceptors'

/**
 * 二次封装axios.get方法
 *
 * 使用方法从 get(url, { params: paramsObj })
 * 修改为 get(url, paramsObj)
 * 更方便使用
 */
export const get = (url, params) => {
  return new Promise((resolve, reject) => {
    service
      .get(url, { params: params })
      .then((res) => {
        resolve(res) // 返回请求成功的数据 data
      })
      .catch((err) => {
        reject(err)
      })
  })
}
export const post = (url, params) => {
  return new Promise((resolve, reject) => {
    service
      .post(url, qs.stringify(params))
      .then((res) => {
        resolve(res)
      })
      .catch((err) => {
        reject(err)
      })
  })
}
