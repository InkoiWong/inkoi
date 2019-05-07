# 页面进度动画插件（可选）

## 一、vue-progressbar

### 1 使用

- [文档](https://www.npmjs.com/package/vue-progressbar)

- 在 [App.vue](./../src/App.vue) 中引入使用

```html
<vue-progress-bar></vue-progress-bar>
```

```js
import VueProgressBar from 'vue-progressbar'
Vue.use(VueProgressBar, options)
```

`{ options }` 组件配置

| params      | type                  | default                                            | intro                            |
| ----------- | --------------------- | -------------------------------------------------- | -------------------------------- |
| color       | [RGB,HEX,HSL,HSV,VEC] | 'rgb(143, 255, 199)'                               | 进度条颜色                       |
| failedColor | [RGB,HEX,HSL,HSV,VEC] | 'red'                                              | 加载失败颜色                     |
| thickness   | [px,em,pt,%,vh,vw]    | '2px'                                              | 厚度                             |
| transition  | object                | {speed: '0.2s', opacity: '0.6s', termination: 300} | 过度动画                         |
| autoRevert  | boolean               | true                                               | 自动还原                         |
| location    | string                | 'top'                                              | 进度条位置                       |
| inverse     | boolean               | false                                              | 反转进度条的方向                 |
| autoFinish  | boolean               | false                                              | 允许进度条在接近 100％时自动完成 |

```js
this.$router.beforeEach((to, from, next) => {
  this.$Progress.start()
  next()
})
this.$router.afterEach((to, from) => {
  this.$Progress.finish()
})
```

- 根据主题颜色替换 VueProgressBar 的颜色

```js
this.$Progress.setColor(color)
```

### 2 关于如何移除该功能 组件

1.  [相关配置](./../src/App.vue) 搜索该文件下 上述例子中相应字段 进行移除
2.  [package.json](./../package.json) 搜索该文件下 `vue-progressbar` 进行移除

## 二、nprogress

### 1 使用

- [文档](https://www.npmjs.com/package/nprogress)

- 在 [router 的钩子函数](./../src/permission.js) 中引入使用

```es6
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

// 简单配置
NProgress.inc(0.2)
NProgress.configure({ easing: 'ease', speed: 500, showSpinner: false })
```

```js
NProgress.start()
NProgress.done()
```

- 替换 progressbar 的颜色

```css (App.vue中的style)
#nprogress .bar {
  background: yellow !important; // 自定义颜色
}
```

### 2 关于如何移除该功能 组件

1.  [相关配置](./../src/permission.js) 搜索该文件下 上述例子中相应字段 进行移除
2.  [package.json](./../package.json) 搜索该文件下 `nprogress` 进行移除
