import Vue from 'vue'
import store from '@/store/'
import {
  ACCESS_TOKEN,
  DEFAULT_COLOR,
  DEFAULT_THEME,
  DEFAULT_LAYOUT_MODE,
  DEFAULT_CONTENT_WIDTH_TYPE,
  DEFAULT_FIXED_HEADER,
  DEFAULT_FIXED_HEADER_HIDDEN,
  SIDEBAR_TYPE,
  DEFAULT_FIXED_SIDEMENU,
  DEFAULT_COLOR_WEAK,
  DEFAULT_MULTI_TAB
} from '@/store/mutation-types'
import config from '@/config/defaultSettings'

export default function Initializer () {
  // Token
  store.commit('SET_TOKEN', Vue.ls.get(ACCESS_TOKEN))

  // 主题颜色
  store.commit('TOGGLE_COLOR', Vue.ls.get(DEFAULT_COLOR, config.primaryColor))
  // 菜单风格：dark 暗色模式 | light 亮色模式
  store.commit('TOGGLE_THEME', Vue.ls.get(DEFAULT_THEME, config.navTheme))

  // 整体布局方式： sidemenu 侧边栏导航模式 | topmenu 顶部栏导航模式
  store.commit('TOGGLE_LAYOUT_MODE', Vue.ls.get(DEFAULT_LAYOUT_MODE, config.layout))
  // 内容区布局（topmenu 顶部栏导航模式下才有效）： Fixed 固定 | Fluid 流式
  store.commit('TOGGLE_CONTENT_WIDTH', Vue.ls.get(DEFAULT_CONTENT_WIDTH_TYPE, config.contentWidth))

  // 头部栏 固定
  store.commit('TOGGLE_FIXED_HEADER', Vue.ls.get(DEFAULT_FIXED_HEADER, config.fixedHeader))
  // 头部栏 向下滚动时，隐藏
  store.commit('TOGGLE_FIXED_HEADER_HIDDEN', Vue.ls.get(DEFAULT_FIXED_HEADER_HIDDEN, config.autoHideHeader))

  // 左侧菜单栏 显示/隐藏
  store.commit('SET_SIDEBAR_TYPE', Vue.ls.get(SIDEBAR_TYPE, true))
  // 左侧菜单栏 固定
  store.commit('TOGGLE_FIXED_SIDERBAR', Vue.ls.get(DEFAULT_FIXED_SIDEMENU, config.fixSiderbar))

  // 色盲模式
  store.commit('TOGGLE_WEAK', Vue.ls.get(DEFAULT_COLOR_WEAK, config.colorWeak))
  // 多标签模式
  store.commit('TOGGLE_MULTI_TAB', Vue.ls.get(DEFAULT_MULTI_TAB, config.multiTab))

  // last step
}
