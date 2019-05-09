import { axios } from '@/axios/request'

const api = {
  role: '/role',
  service: '/service',
  permission: '/permission',
  permissionNoPager: '/permission/no-pager',
  orgTree: '/org/tree'
}

export default api

export function getRoleList (params) {
  return axios.get(api.role, params)
}

export function getServiceList (params) {
  return axios.get(api.service, params)
}

export function getPermissions (params) {
  return axios.get(api.permissionNoPager, params)
}

export function getOrgTree (params) {
  return axios.get(api.orgTree, params)
}

// id == 0 add     post
// id != 0 update  put
export function saveService (params) {
  return axios({
    url: api.service,
    method: params.id === 0 ? 'post' : 'put',
    data: params
  })
}
