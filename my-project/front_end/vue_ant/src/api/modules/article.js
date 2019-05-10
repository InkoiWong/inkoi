import { axios } from '@/axios/request'

const api = {
  list: '/article/list'
}

export function getArticleList (parameter) {
  return axios.get(api.list, parameter)
}
