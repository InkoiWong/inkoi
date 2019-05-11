import Vue from 'vue'
import VueStorage from 'vue-ls'
import config from '@/config/defaultSettings'

// base library
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.less'

// Viser 一个基于 G2 实现的，为数据可视化工程师量身定制的工具。
// Viser-Graph 一个基于 G6 实现的，为呈现关系型数据的定制化工具。
import Viser from 'viser-vue'
// 图片裁剪插件
import VueCropper from 'vue-cropper'
// 剪切板功能
import VueClipboard from 'vue-clipboard2'

import PermissionHelper from '@/utils/helper/permission'

VueClipboard.config.autoSetContainer = true

Vue.use(VueStorage, config.storageOptions)

Vue.use(Antd)

Vue.use(Viser)
Vue.use(VueClipboard)
Vue.use(VueCropper)

Vue.use(PermissionHelper)
