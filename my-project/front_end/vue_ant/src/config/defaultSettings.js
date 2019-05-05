/**
 * 项目默认配置项
 *
 * primaryColor - 默认主题色
 * navTheme - sidebar theme ['dark', 'light'] 两种主题
 *
 * layout - 整体布局方式 ['sidemenu', 'topmenu'] 两种布局
 * contentWidth - 内容区布局： 固定 | 流式
 *
 * fixedHeader - 固定 Header : boolean
 * autoHideHeader - 向下滚动时，隐藏 Header : boolean
 *
 * fixSiderbar - 固定左侧菜单栏 ： boolean
 *
 * colorWeak - 色盲模式
 * multiTab - 多标签模式
 *
 * storageOptions: {} - Vue-ls 插件配置项 (localStorage/sessionStorage)
 *
 */

export default {
  primaryColor: '#1890FF', // primary color of ant design
  navTheme: 'dark', // theme for nav menu

  layout: 'sidemenu', // nav menu position: sidemenu or topmenu
  contentWidth: 'Fixed', // layout of content: Fluid or Fixed, only works when layout is topmenu

  fixedHeader: false, // sticky header
  autoHideHeader: false, //  auto hide header

  fixSiderbar: false, // sticky siderbar

  colorWeak: false,
  multiTab: false,

  production: process.env.NODE_ENV === 'production' && process.env.VUE_APP_PREVIEW !== 'true',

  // vue-ls options
  storageOptions: {
    namespace: 'pro__', // key prefix
    name: 'ls', // name variable Vue.[ls] or this.[$ls],
    storage: 'local' // storage name session, local, memory
  }
}
