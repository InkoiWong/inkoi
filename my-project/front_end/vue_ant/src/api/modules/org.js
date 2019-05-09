import { axios } from '@/axios/request'

const api = {
  orgTree: '/org/tree'
}

export function getOrgTree (parameter) {
  return axios.get(api.orgTree, {
    params: parameter
  })
}
