import Vue from 'vue'
import {
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

const app = {
  state: {
    color: null, // 主题颜色
    theme: '', // 菜单风格：dark 暗色模式 | light 亮色模式
    layout: '', // 整体布局方式： sidemenu 侧边栏导航模式 | topmenu 顶部栏导航模式
    contentWidth: '', // 内容区布局（topmenu 顶部栏导航模式下才有效）： Fixed 固定 | Fluid 流式
    fixedHeader: false, // 头部栏 固定
    autoHideHeader: false, // 头部栏 向下滚动时，隐藏
    sidebar: true, // 左侧菜单栏 显示/隐藏
    fixSiderbar: false, // 左侧菜单栏 固定
    weak: false, // 色盲模式
    multiTab: true, // 多标签模式
    device: 'desktop' // 设备
  },
  mutations: {
    TOGGLE_COLOR: (state, color) => {
      // 主题颜色
      Vue.ls.set(DEFAULT_COLOR, color)
      state.color = color
    },
    TOGGLE_THEME: (state, theme) => {
      // 菜单风格：dark 暗色模式 | light 亮色模式
      Vue.ls.set(DEFAULT_THEME, theme)
      state.theme = theme
    },
    TOGGLE_LAYOUT_MODE: (state, layout) => {
      // 整体布局方式： sidemenu 侧边栏导航模式 | topmenu 顶部栏导航模式
      Vue.ls.set(DEFAULT_LAYOUT_MODE, layout)
      state.layout = layout
    },
    TOGGLE_CONTENT_WIDTH: (state, type) => {
      // 内容区布局（topmenu 顶部栏导航模式下才有效）： Fixed 固定 | Fluid 流式
      Vue.ls.set(DEFAULT_CONTENT_WIDTH_TYPE, type)
      state.contentWidth = type
    },
    TOGGLE_FIXED_HEADER: (state, fixed) => {
      // 头部栏 固定
      Vue.ls.set(DEFAULT_FIXED_HEADER, fixed)
      state.fixedHeader = fixed
    },
    TOGGLE_FIXED_HEADER_HIDDEN: (state, show) => {
      // 头部栏 向下滚动时，隐藏
      Vue.ls.set(DEFAULT_FIXED_HEADER_HIDDEN, show)
      state.autoHideHeader = show
    },
    SET_SIDEBAR_TYPE: (state, type) => {
      // 左侧菜单栏 显示/隐藏
      state.sidebar = type
      Vue.ls.set(SIDEBAR_TYPE, type)
    },
    CLOSE_SIDEBAR: state => {
      // 左侧菜单栏 显示/隐藏
      Vue.ls.set(SIDEBAR_TYPE, true)
      state.sidebar = false
    },
    TOGGLE_FIXED_SIDERBAR: (state, fixed) => {
      // 左侧菜单栏 固定
      Vue.ls.set(DEFAULT_FIXED_SIDEMENU, fixed)
      state.fixSiderbar = fixed
    },
    TOGGLE_WEAK: (state, flag) => {
      // 色盲模式
      Vue.ls.set(DEFAULT_COLOR_WEAK, flag)
      state.weak = flag
    },
    TOGGLE_MULTI_TAB: (state, bool) => {
      // 多标签模式
      Vue.ls.set(DEFAULT_MULTI_TAB, bool)
      state.multiTab = bool
    },
    TOGGLE_DEVICE: (state, device) => {
      // 设备
      state.device = device
    }
  },
  actions: {
    ToggleColor ({ commit }, color) {
      // 主题颜色
      commit('TOGGLE_COLOR', color)
    },
    ToggleTheme ({ commit }, theme) {
      // 菜单风格：dark 暗色模式 | light 亮色模式
      commit('TOGGLE_THEME', theme)
    },
    ToggleLayoutMode ({ commit }, mode) {
      // 整体布局方式： sidemenu 侧边栏导航模式 | topmenu 顶部栏导航模式
      commit('TOGGLE_LAYOUT_MODE', mode)
    },
    ToggleContentWidth ({ commit }, type) {
      // 内容区布局（topmenu 顶部栏导航模式下才有效）： Fixed 固定 | Fluid 流式
      commit('TOGGLE_CONTENT_WIDTH', type)
    },
    ToggleFixedHeader ({ commit }, fixedHeader) {
      // 头部栏 固定
      if (!fixedHeader) {
        commit('TOGGLE_FIXED_HEADER_HIDDEN', false)
      }
      commit('TOGGLE_FIXED_HEADER', fixedHeader)
    },
    ToggleFixedHeaderHidden ({ commit }, show) {
      // 头部栏 向下滚动时，隐藏
      commit('TOGGLE_FIXED_HEADER_HIDDEN', show)
    },
    setSidebar ({ commit }, type) {
      // 左侧菜单栏 显示/隐藏
      commit('SET_SIDEBAR_TYPE', type)
    },
    CloseSidebar ({ commit }) {
      // 左侧菜单栏 显示/隐藏
      commit('CLOSE_SIDEBAR')
    },
    ToggleFixSiderbar ({ commit }, fixSiderbar) {
      // 左侧菜单栏 固定
      commit('TOGGLE_FIXED_SIDERBAR', fixSiderbar)
    },
    ToggleWeak ({ commit }, weakFlag) {
      // 色盲模式
      commit('TOGGLE_WEAK', weakFlag)
    },
    ToggleMultiTab ({ commit }, bool) {
      // 多标签模式
      commit('TOGGLE_MULTI_TAB', bool)
    },
    ToggleDevice ({ commit }, device) {
      // 设备
      commit('TOGGLE_DEVICE', device)
    }
  }
}

export default app
