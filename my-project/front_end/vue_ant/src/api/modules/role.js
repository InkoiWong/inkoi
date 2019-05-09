import { axios } from '@/axios/request'

const api = {
  role: '/role/list'
}

export function getRoleList (parameter) {
  return axios.get(api.role, {
    params: parameter
  })
}
