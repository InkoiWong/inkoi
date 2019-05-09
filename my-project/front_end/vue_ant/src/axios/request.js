import Vue from 'vue'
import axios from 'axios'
import store from '@/store'
import { VueAxios } from './axios'
import notification from 'ant-design-vue/es/notification'
import { ACCESS_TOKEN } from '@/store/mutation-types'

// 设置axios请求的默认配置（接口的参数继承默认配置）
axios.defaults.baseURL = '/api'
axios.defaults.timeout = 5000 // 请求超时时间
// 传参格式：可以全部配置，也可以分别设置
// axios.defaults.headers['Content-Type'] = 'application/json;charset=UTF-8'
axios.defaults.headers['get']['Content-Type'] = 'application/json;charset=UTF-8'
// axios.defaults.headers['post']['Content-Type'] = 'application/json;charset=UTF-8'

// 创建 axios 实例
const service = axios.create()

const err = error => {
  if (error.response) {
    const data = error.response.data
    const token = Vue.ls.get(ACCESS_TOKEN)
    if (error.response.status === 403) {
      notification.error({
        message: 'Forbidden',
        description: data.message
      })
    }
    if (error.response.status === 401 && !(data.result && data.result.isLogin)) {
      notification.error({
        message: 'Unauthorized',
        description: 'Authorization verification failed'
      })
      if (token) {
        store.dispatch('Logout').then(() => {
          setTimeout(() => {
            window.location.reload()
          }, 1500)
        })
      }
    }
  }
  return Promise.reject(error)
}

// request interceptor
service.interceptors.request.use(config => {
  const token = Vue.ls.get(ACCESS_TOKEN)
  if (token) {
    config.headers['Access-Token'] = token // 让每个请求携带自定义 token 请根据实际情况自行修改
  }
  return config
}, err)

// response interceptor
service.interceptors.response.use(response => {
  return response.data
}, err)

/**
 * 二次封装axios.get方法
 *
 * 使用方法从 axios.get(url, { params: paramsObj })
 * 修改为 axios.get(url, paramsObj)
 * 更方便使用
 */
service['get'] = (url, parameter) => {
  return service({
    url,
    method: 'get',
    params: parameter
  })
}

const installer = {
  vm: {},
  install (Vue) {
    Vue.use(VueAxios, service)
  }
}

export { installer as VueAxios, service as axios }
