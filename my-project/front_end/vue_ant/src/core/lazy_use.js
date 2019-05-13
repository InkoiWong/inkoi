import Vue from 'vue'
import VueStorage from 'vue-ls'
import config from '@/config/defaultSettings'

// base library
// UI框架（按需加载组件）
import '@/core/lazy_lib/components_use'

// Viser 一个基于 G2 实现的，为数据可视化工程师量身定制的工具。
// Viser-Graph 一个基于 G6 实现的，为呈现关系型数据的定制化工具。
import Viser from 'viser-vue'
// 图片裁剪插件
import VueClipboard from 'vue-clipboard2'

// 操作权限控制器
import PermissionHelper from '@/utils/helper/permission'

Vue.use(VueStorage, config.storageOptions)

Vue.use(Viser)
VueClipboard.config.autoSetContainer = true
Vue.use(VueClipboard)

Vue.use(PermissionHelper)
