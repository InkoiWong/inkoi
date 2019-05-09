import Vue from 'vue'
import { login, logout } from '@/api/auth'
import { getUserInfo } from '@/api/user'
import { ACCESS_TOKEN } from '@/store/mutation-types'
import { welcome } from '@/utils/util'

const user = {
  state: {
    token: '', // 登录标识
    name: '', // 用户昵称
    welcome: '', // 欢迎语
    avatar: '', // 用户头像
    roles: [], // 用户权限
    info: {} // 详情信息
  },

  mutations: {
    SET_TOKEN: (state, token) => {
      // 登录标识
      state.token = token
    },
    SET_NAME: (state, { name, welcome }) => {
      // 用户昵称
      state.name = name
      // 欢迎语
      state.welcome = welcome
    },
    SET_AVATAR: (state, avatar) => {
      // 用户头像
      state.avatar = avatar
    },
    SET_ROLES: (state, roles) => {
      // 用户权限
      state.roles = roles
    },
    SET_INFO: (state, info) => {
      // 详情信息
      state.info = info
    }
  },

  actions: {
    // 登录
    Login ({ commit }, userInfo) {
      return new Promise((resolve, reject) => {
        login(userInfo)
          .then(response => {
            const result = response.result
            Vue.ls.set(ACCESS_TOKEN, result.token, 7 * 24 * 60 * 60 * 1000)
            commit('SET_TOKEN', result.token)
            resolve()
          })
          .catch(error => {
            reject(error)
          })
      })
    },

    // 获取用户信息
    GetInfo ({ commit }) {
      return new Promise((resolve, reject) => {
        getUserInfo()
          .then(response => {
            const result = response.result

            if (result.role && result.role.permissions.length > 0) {
              const role = result.role
              role.permissions = result.role.permissions

              // 将每个 permission 中的 actionEntitySet.action 整合到 permission.actionList（操作权限）
              role.permissions.map(per => {
                if (per.actionEntitySet != null && per.actionEntitySet.length > 0) {
                  const action = per.actionEntitySet.map(action => {
                    return action.action
                  })
                  per.actionList = action
                }
              })

              // 将每个 permission 的 permissionId 整合到 permissionList（菜单权限）
              role.permissionList = role.permissions.map(permission => {
                return permission.permissionId
              })

              // console.log('权限：', result.role)
              // console.log('菜单权限：', result.role.permissionList)
              // console.log('操作权限：', result.role.permission[i].actionList)

              commit('SET_ROLES', result.role)
              commit('SET_INFO', result)
            } else {
              reject(new Error('getUserInfo: roles must be a non-null array !'))
            }

            commit('SET_NAME', { name: result.name, welcome: welcome() })
            commit('SET_AVATAR', result.avatar)

            resolve(response)
          })
          .catch(error => {
            reject(error)
          })
      })
    },

    // 登出
    Logout ({ commit, state }) {
      return new Promise(resolve => {
        commit('SET_TOKEN', '')
        commit('SET_ROLES', [])
        Vue.ls.remove(ACCESS_TOKEN)

        logout(state.token)
          .then(() => {
            resolve()
          })
          .catch(() => {
            resolve()
          })
      })
    }
  }
}

export default user
