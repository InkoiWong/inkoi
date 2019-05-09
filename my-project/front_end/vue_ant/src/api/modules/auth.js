import { axios } from '@/axios/request'

const api = {
  Login: '/auth/login',
  Logout: '/auth/logout',
  twoStepCode: '/auth/2step-code'
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
  return axios.post(api.Login, {
    data: parameter
  })
}

export function logout () {
  return axios.post(api.Logout)
}

export function get2step (parameter) {
  return axios.post(api.twoStepCode, {
    data: parameter
  })
}
