import { axios } from '@/axios/request'

const api = {
  orgTree: '/org/tree'
}

export function getOrgTree (params) {
  return axios.get(api.orgTree, params)
}
