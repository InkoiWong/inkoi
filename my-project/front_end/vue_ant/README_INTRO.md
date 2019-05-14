# 后台管理系统

## 创建

```
npm install -g @vue/cli
vue -V

vue create manage_system_vue

cnpm install --save ant-design-vue
```

## 项目技术

- UI 框架
  - [√] Ant Design Vue
  - [x] ElementUI
- router
  - [√] README [说明文档](./src/router/README.md)
  - [√] router [路由管理器](./src/router/index.js)
  - [√] router-map [路由地图](./src/router/router-map.js)
    - [√] constantRouterMap 基础路由
    - [√] asyncRouterMap 动态路由
  - [√] hook [钩子函数](./src/permission.js)
- store
  - [√] README [说明文档](./src/store/README.md)
  - [√] store [状态管理器](./src/store/index.js)
- axios
  - [√] README [说明文档](./src/axios/README.md)
  - [√] axios [封装](./src/axios/axios.js)
  - [√] request [拦截器](./src/axios/request.js)
- API 接口管理
  - [√] README [说明文档](./src/api/README.md)
- icon 图标
  - [√] icons [自定义图标加载表](./src/core/icons.js)
- mixin 混入继承功能
  - [√] mixin [](./src/utils/mixin.js)
- css 媒体查询功能
  - [√] require.js [](./src/utils/device.js)

## 全局自定义功能

- [√] `{ $axios }` [http 请求 promise 函数](./src/axios/axios.js)
- [√] `{ v-action }` [操作权限控制组件](./src/permission.js)
- [√] `{ $auth }` [操作权限控制操作](./src/utils/helper/permission.js)
- [√] `{ Filter }` [过滤器功能](./src/utils/filter.js)

## 引入插件

## 项目基础功能

- 基础设置
  - [√] Title [页面标题控制](./src/utils/domUtil.js)
  - [ ] Transition 页面切换过渡 (Ant√)
    - [√] progressbar [页面进度动画插件](./docs/progressbar.md)
      - [√] vue-progressbar
      - [x] nprogress
    - [ ] 骨架屏
- 权限管理
  - [√] router [权限功能控制](./src/permission.js)
    - [√] 动态添加可访问路由表
    - [√] Action 权限指令
  - [√] store [权限功能管理](./src/store/permission.js)

## 布局与组件

- layout 布局
  - [√] README [说明文档](./src/layouts/README.md)
  - [√] UserLayout [用户登录注册相关页面布局](./src/layouts/UserLayout.vue)
  - [√] BlankLayout [空白页面布局](./src/layouts/BlankLayout.vue)
  - [√] BasicLayout [基础页面布局](./src/layouts/BasicLayout.vue)
  - [√] RouteView [keep-alive 功能](./src/layouts/RouteView.vue) 相关文章：(https://www.jianshu.com/p/4b55d312d297)
  - [√] PageView [内容区域](./src/layouts/PageView.vue)
- component 组件
  - [ ] README [说明文档](./src/component/README.md)

## 项目结构

- [ ] 用户账号

  - [ ] 登录
  - [ ] 注册
  - [ ] 注销

- [ ] HeaderBar 头部栏 (Ant√)

  - [ ] 文档/使用说明
  - [ ] 站内搜索
  - [ ] 全屏功能
  - [ ] 未读消息
  - [ ] 用户
    - [ ] 个人中心
    - [ ] 账号设置
    - [ ] 退出登录
  - [ ] 语言切换功能

- [ ] Sidebar 菜单栏 (Ant√)

  - [ ] 单列三级菜单
  - [ ] 新列三级菜单 (Wbfwtop√)

- [ ] TagsBar 多页签模式 (Ant√)

  - [ ] 关闭其他功能
  - [ ] 关闭所有功能

- [ ] HomePage 首页 (Ant√)

- [ ] Dashboard 仪表盘

  - [ ] 工作台
  - [ ] 监控台
  - [ ] 分析台

- [ ] Form 表单 [ ] 使用弹窗实现

  - [ ] 基础表单
    - [ ] small 单列表单
    - [ ] large 多列表单
  - [ ] 复杂表单
  - [ ] 分布表单
  - 表单 Fields
    - [ ] Input 输入框
    - [ ] Autocomplete 下拉输入框
    - [ ] InputNumber 计数器
    - [ ] Textarea 文本框
    - [ ] Checkbox 多选框
    - [ ] Radio 单选框
    - [ ] Switch 开关
    - [ ] Slider 滑块
    - [ ] Select 选择器
    - [ ] Cascader 级联选择器
      - [ ] 单选
      - [ ] 多选
    - [ ] Tree 树形选择器
      - [ ] 单选
      - [ ] 多选
    - [ ] Transfer 穿梭框
    - [ ] DatePicker 日期选择器
    - [ ] TimePicker 时间选择器
    - [ ] DateTimePicker 日期时间选择器
    - [ ] Rate 评分
    - [ ] Like 点赞
  - [ ] Validate 表单验证

- [ ] Table 表格

  - [ ] 普通列表
    - [ ] 查询
    - [ ] 分页
    - [ ] 批量操作
    - [ ] 排序
    - [ ] 内联编辑
  - [ ] 特殊列表
    - [ ] 卡片列表
    - [ ] 文章列表
    - [ ] 商品列表

- [ ] DetailPage 详情页 [ ] 使用弹窗实现

  - 基础详情页
  - 多元素详情页

- [ ] 结果页

  - [ ] 成功页
  - [ ] 失败页

- [ ] 异常页

  - [ ] 403 无权限页面
  - [ ] 404 页面不存在
  - [ ] 500 服务器出错

- [ ] 用户中心

  - [ ] 用户中心页
  - [ ] 账号设置页

- [ ] 系统设置

  - [ ] 用户列表
  - [ ] 角色列表
  - [ ] 菜单权限
  - [ ] 数据权限
  - [ ] 按钮权限（操作权限）
  - [ ] 操作日志管理

- [ ] 开发者功能

  - [ ] 数据字典
  - [ ] 密钥管理
  - [ ] 密码解析

- [ ] 报表

  - [ ] 柱状图
  - [ ] 折线图
  - [ ] 饼状图
  - [ ] 环形图
  - [ ] 树状图
  - [ ] 散点分布图
    - [ ] 坐标散点分布图
    - [ ] 地图散点分布图

- 其它控件

  - [ ] Dialog 弹窗功能
    - [ ] Msg 消息提醒
    - [ ] Tips 需点确认的消息提醒
    - [ ] Confirm 二次确认
  - [ ] Notification 通知提醒框
  - [ ] Editor 各种编辑器
    - [ ] Quill 富文本编辑器
    - [ ] Markdown 编辑器
    - [ ] 流程编辑器
    - [ ] 脑图编辑器
    - [ ] 拓扑编辑器
  - [ ] Upload 上传
    - [ ] Files 文件上传
    - [ ] Imgs 图片上传
  - [ ] ImgPreview 图片预览
  - [ ] Dragger 拖拽
    - [ ] 拖拽列表
    - [ ] 拖拽弹窗
  - [ ] Print 打印
  - [ ] Screenshot 截图

- 引入控件

  - [ ] 极验验证
  - [ ] IM
  - [ ] Map 地图

- UI 设置

  - [ ] Layout 布局
  - [ ] Grid 栅格
  - [ ] ThemeColor 主题色彩
  - [ ] Typography 字体
  - [ ] Icon 图标
  - [ ] Button 按钮

- 其它功能

  - [ ] Loading 加载
  - [ ] Skeleton 骨架屏
  - [ ] Breadcrumb 面包屑
  - [ ] Dropdown 下拉菜单
  - [ ] Affix 固钉
  - [ ] Badge 徽标
  - [ ] Steps 步骤条
  - [ ] Progress 进度条
  - [ ] Tooltip 文字提示
  - [ ] Popover 气泡
  - [ ] Carousel 走马灯
  - [ ] Collapse 折叠面板
    - [ ] Accordion 手风琴
  - [ ] Countdown 倒计时
  - [ ] Drawer 抽屉
  - [ ] Divider 分割线
  - [ ] Anchor 锚点
  - [ ] BackTop 回到顶部
  - [ ] Empty 空状态
    - [ ] 列表无数据
    - [ ] 下拉无数据

- 待定功能

  - [ ] 调用摄像头
  - [ ] 调用麦克风

- 待定插件

  - [ ] 人脸识别
