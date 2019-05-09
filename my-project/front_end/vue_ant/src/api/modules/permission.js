import { axios } from '@/axios/request'

const api = {
  permission: '/permission',
  permissionNoPager: '/permission/no-pager'
}

export function getPermissions (parameter) {
  return axios.get(api.permissionNoPager, parameter)
}
