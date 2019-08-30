// import Vue from 'vue'
import axios from './default.config'

// 创建 axios 实例
const service = axios.create()

// 请求错误回调函数
const handleError = err => {
  if (err.response) {
  }
  return Promise.reject(err)
}

// 请求拦截
service.interceptors.request.use(config => {
  // const token = Vue.ls.get('token')
  // if (token) {
  //   config.headers['Access-Token'] = token // 让每个请求携带自定义 token 请根据实际情况自行修改
  // }

  return config
}, handleError)

// 响应拦截
service.interceptors.response.use(res => {
  return res
}, handleError)

export default service
