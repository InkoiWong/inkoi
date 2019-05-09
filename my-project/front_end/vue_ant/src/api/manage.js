import { axios } from '@/axios/request'

const api = {
  role: '/role',
  service: '/service',
  permission: '/permission',
  permissionNoPager: '/permission/no-pager',
  orgTree: '/org/tree'
}

export default api

export function getRoleList (parameter) {
  return axios.get(api.role, {
    params: parameter
  })
}

export function getServiceList (parameter) {
  return axios.get(api.service, {
    params: parameter
  })
}

export function getPermissions (parameter) {
  return axios.get(api.permissionNoPager, {
    params: parameter
  })
}

export function getOrgTree (parameter) {
  return axios.get(api.orgTree, {
    params: parameter
  })
}

// id == 0 add     post
// id != 0 update  put
export function saveService (parameter) {
  return axios({
    url: api.service,
    method: parameter.id === 0 ? 'post' : 'put',
    data: parameter
  })
}
