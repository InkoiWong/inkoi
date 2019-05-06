import Vue from 'vue'
import router from './router'
import store from './store'

import VueProgressBar from 'vue-progressbar'
// import NProgress from 'nprogress' // progress bar
// import 'nprogress/nprogress.css' // progress bar style

import notification from 'ant-design-vue/es/notification'
import { setDocumentTitle, documentBaseTitle } from '@/utils/domUtil'
import { ACCESS_TOKEN } from '@/store/mutation-types'

const options = {
  // 颜色
  color: '#EDBB79',
  // 加载失败颜色
  failedColor: 'red',
  // 厚度
  thickness: '2px',
  // 动画
  transition: {
    speed: '0.2s',
    opacity: '0.6s',
    termination: 300
  },
  // 自动还原
  autoRevert: true,
  // 进度条位置
  location: 'top',
  // 反转进度条的方向
  inverse: false,
  // 允许进度条在接近100％时自动完成
  autoFinish: false
}

Vue.use(VueProgressBar, options)

// NProgress Configuration
// NProgress.inc(0.2)
// NProgress.configure({ easing: 'ease', speed: 500, showSpinner: false })

const whiteList = ['login', 'register', 'registerResult'] // no redirect whitelist

router.beforeEach((to, from, next) => {
  // NProgress.start() // start progress bar
  to.meta && (typeof to.meta.title !== 'undefined' && setDocumentTitle(`${to.meta.title} - ${documentBaseTitle}`))

  if (Vue.ls.get(ACCESS_TOKEN)) {
    /* has token */
    if (to.path === '/user/login') {
      next({ path: '/dashboard/workplace' })
      // NProgress.done()
    } else {
      if (store.getters.roles.length === 0) {
        store
          .dispatch('GetInfo')
          .then(res => {
            const roles = res.result && res.result.role
            store.dispatch('GenerateRoutes', { roles }).then(() => {
              // 根据roles权限生成可访问的路由表
              // 动态添加可访问路由表（添加动态路由必须在创建vue实例之前执行）
              router.addRoutes(store.getters.addRouters)

              const redirect = decodeURIComponent(from.query.redirect || to.path)
              if (to.path === redirect) {
                // hack方法 确保addRoutes已完成 ,set the replace: true so the navigation will not leave a history record
                next({ ...to, replace: true })
              } else {
                // 跳转到目的路由
                next({ path: redirect })
              }
            })
          })
          .catch(() => {
            notification.error({
              message: '错误',
              description: '请求用户信息失败，请重试'
            })
            store.dispatch('Logout').then(() => {
              next({ path: '/user/login', query: { redirect: to.fullPath } })
            })
          })
      } else {
        next()
      }
    }
  } else {
    if (whiteList.includes(to.name)) {
      // 在免登录白名单，直接进入
      next()
    } else {
      next({ path: '/user/login', query: { redirect: to.fullPath } })
      // NProgress.done() // if current page is login will not trigger afterEach hook, so manually handle it
    }
  }
})

router.afterEach(() => {
  // NProgress.done() // finish progress bar
})

/**
 * Action 权限指令
 * 指令用法：
 *  - 在需要控制 action 级别权限的组件上使用 v-action:[method] , 如下：
 *    <i-button v-action:add >添加用户</a-button>
 *    <a-button v-action:delete>删除用户</a-button>
 *    <a v-action:edit @click="edit(record)">修改</a>
 *
 *  - 当前用户没有权限时，组件上使用了该指令则会被隐藏
 *  - 当后台权限跟 pro 提供的模式不同时，只需要针对这里的权限过滤进行修改即可
 *
 *  @see https://github.com/sendya/ant-design-pro-vue/pull/53
 */
const action = Vue.directive('action', {
  bind: function (el, binding, vnode) {
    const actionName = binding.arg
    const roles = store.getters.roles
    const elVal = vnode.context.$route.meta.permission
    const permissionId = (elVal instanceof String && [elVal]) || elVal
    roles.permissions.forEach(p => {
      if (!permissionId.includes(p.permissionId)) {
        return
      }
      if (p.actionList && !p.actionList.includes(actionName)) {
        ;(el.parentNode && el.parentNode.removeChild(el)) || (el.style.display = 'none')
      }
    })
  }
})

export { action }
