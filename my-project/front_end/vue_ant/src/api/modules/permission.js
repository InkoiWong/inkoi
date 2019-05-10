import { axios } from '@/axios/request'

const api = {
  permissionListPager: '/permission/listPager',
  permissionListNoPager: '/permission/listNoPager'
}

export function getPermissions (parameter) {
  return axios.get(api.permissionListNoPager, parameter)
}
