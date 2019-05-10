import { axios } from '@/axios/request'

const api = {
  list: '/project/list'
}

export function getProjectList (parameter) {
  return axios.get(api.list, parameter)
}
