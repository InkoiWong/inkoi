## vue.config.js

- vue.config.js 是一个可选的配置文件，如果项目的 (和 package.json 同级的) 根目录中存在这个文件，那么它会被 @vue/cli-service 自动加载。
  你也可以使用 package.json 中的 vue 字段，但是注意这种写法需要你严格遵照 JSON 的格式来写。
  这个文件应该导出一个包含了选项的对象：
  [vue.config.js](./new-project/vue.config.js)

```
// vue.config.js
module.exports = {
  // 选项...
}
```

- webpack-dev-server 相关配置
  [devServer.config.js](./new-project/vue-config/devServer.config.js)

- 引入多页面配置文件
  [multiPage.config.js](./new-project/vue-config/multiPage.config.js)
