import { axios } from '@/axios/request'

const api = {
  UserInfo: '/user/info',
  UserList: '/user/list'
}

export function getUserInfo () {
  return axios.get(api.UserInfo)
}

export function getUserList (parameter) {
  return axios.get(api.UserList, {
    params: parameter
  })
}
