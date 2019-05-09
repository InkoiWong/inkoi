import { axios } from '@/axios/request'

const api = {
  Login: '/auth/login',
  Logout: '/auth/logout',
  twoStepCode: '/auth/2step-code'
}

/**
 * login func
 * params: {
 *     username: '',
 *     password: '',
 *     remember_me: true,
 *     captcha: '12345'
 * }
 * @param params
 * @returns {*}
 */
export function login (params) {
  return axios.post(api.Login, params)
}

export function logout () {
  return axios.post(api.Logout)
}

export function get2step (params) {
  return axios.post(api.twoStepCode, params)
}
