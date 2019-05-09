import { axios } from '@/axios/request'

const api = {
  SendSms: '/account/sms'
}

export function getSmsCaptcha (parameter) {
  return axios.post(api.SendSms, {
    data: parameter
  })
}
