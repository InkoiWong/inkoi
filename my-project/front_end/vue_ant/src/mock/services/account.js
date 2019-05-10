import Mock from 'mockjs2'
import { builder } from '../util'

const smsCaptcha = () => {
  return builder({ captcha: Mock.mock('@integer(10000, 99999)') })
}

Mock.mock(/\/account\/sms/, 'post', smsCaptcha)
