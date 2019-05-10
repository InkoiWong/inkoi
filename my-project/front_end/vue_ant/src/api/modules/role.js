import { axios } from '@/axios/request'

const api = {
  list: '/role/list'
}

export function getRoleList (parameter) {
  return axios.get(api.list, parameter)
}
