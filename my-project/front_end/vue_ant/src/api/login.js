import { axios } from '@/axios/request'

const api = {
  Login: '/auth/login',
  Logout: '/auth/logout',
  twoStepCode: '/auth/2step-code',
  SendSms: '/account/sms',
  UserInfo: '/user/info'
}

/**
 * login func
 * parameter: {
 *     username: '',
 *     password: '',
 *     remember_me: true,
 *     captcha: '12345'
 * }
 * @param parameter
 * @returns {*}
 */
export function login (parameter) {
  return axios.post(api.Login, parameter)
}

export function getSmsCaptcha (parameter) {
  return axios.post(api.SendSms, parameter)
}

export function getInfo () {
  return axios.get(api.UserInfo)
}

export function logout () {
  return axios.post(api.Logout)
}

/**
 * get user 2step code open?
 * @param parameter {*}
 */
export function get2step (parameter) {
  return axios({
    url: api.twoStepCode,
    method: 'post',
    data: parameter
  })
}
