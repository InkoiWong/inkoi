import { axios } from '@/axios/request'

const api = {
  SendSms: '/account/sms'
}

export function getSmsCaptcha (params) {
  return axios.post(api.SendSms, params)
}
