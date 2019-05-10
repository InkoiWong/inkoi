import { axios } from '@/axios/request'

const api = {
  info: '/user/info',
  list: '/user/list'
}

export function getUserInfo () {
  return axios.get(api.info)
}

export function getUserList (parameter) {
  return axios.get(api.list, parameter)
}
