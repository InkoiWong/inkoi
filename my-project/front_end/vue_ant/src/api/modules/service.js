import { axios } from '@/axios/request'

const api = {
  list: '/service/list'
}

export function getServiceList (parameter) {
  return axios.get(api.list, parameter)
}

// id == 0 add     post
// id != 0 update  put
export function saveService (parameter) {
  return axios({
    url: api.list,
    method: parameter.id === 0 ? 'post' : 'put',
    data: parameter
  })
}
