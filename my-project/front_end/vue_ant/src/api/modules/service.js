import { axios } from '@/axios/request'

const api = {
  service: '/service/list'
}

export function getServiceList (parameter) {
  return axios.get(api.service, {
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
