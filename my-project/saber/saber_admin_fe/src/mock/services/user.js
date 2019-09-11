import Mock from 'mockjs2'
import { builder } from '../util'

const info = options => {
  const userInfo = {
    id: '4291d7da9005377ec9aec4a71ea837f',
    name: '长尾小野猫',
    username: 'admin'
  }

  return builder(userInfo)
}

Mock.mock('/user/info', 'get', info)
