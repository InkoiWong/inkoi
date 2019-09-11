import router from './router'

router.beforeEach((to, from, next) => {
  // P.S 最后一定要调用 next() 方法来 resolve 这个Promise钩子
  next()
})

router.afterEach((to, from) => {})

export default router
