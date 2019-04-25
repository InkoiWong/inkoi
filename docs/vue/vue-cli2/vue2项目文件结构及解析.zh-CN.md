## 项目结构

# build 文件夹

- [build.js](./new-project/build/build.js)
  项目打包

- [check-versions.js](./new-project/build/check-versions.js)
  检测 node 和 npm 的版本，实现版本依赖

- [utils.js](./new-project/build/utils.js)
  utils 是工具的意思，是一个用来处理 css 的文件，这个文件包含了三个工具函数：

  - 生成静态资源的路径
  - 生成 ExtractTextPlugin 对象或 loader 字符串
  - 生成 style-loader 的配置

- [vue-loader.conf.js](./new-project/build/vue-loader.conf.js)
  处理.vue 文件，解析这个文件中的每个语言块（template、script、style)，转换成 js 可用的 js 模块。

- [webpack.base.conf.js](./new-project/build/webpack.base.conf.js)
  开发、测试、生产环境的公共基础配置文件，配置输出环境，配置模块 resolve 和插件等
- [webpack.dev.conf.js](./new-project/build/webpack.dev.conf.js)
  webpack 配置开发环境中的入口
- [webpack.prod.conf.js](./new-project/build/webpack.prod.conf.js)
  webpack 配置生产环境中的入口

# config 文件夹

- [dev.env.js](./new-project/config/dev.env.js)
  [prod.env.js](./new-project/config/prod.env.js)
  分别配置：开发环境和生产环境。这个可以根据公司业务结合后端需求配置需要区分开发环境和测试环境的属性

- [index.js](./new-project/config/index.js)

# node_modules 文件夹

> 存放 npm install 时根据 package.json 配置生成的 npm 安装包的文件夹

# src 文件夹

> 我们需要在 src 文件夹中开发代码，打包时 webpack 会根据 build 中的规则（build 规则依赖于 config 中的配置）将 src 打包压缩到 dist 文件夹在浏览器中运行

- assets 文件：用于存放静态资源（css、image），assets 打包时路径会经过 webpack 中的 file-loader 编译（因此，assets 需要使用绝对路径）成 js
- components 文件夹：用来存放 .vue 组件(实现复用等功能，如：过滤器，列表项等)
- router 文件夹：在 router/index.js 文件中配置页面路由
- App.vue：是整个项目的主组件，所有页面都是通过使用<router-view/>开放入口在 App.vue 下进行切换的（所有的路由都是 App.vue 的子组件）
- main.js：入口 js 文件（全局 js，你可以在这里：初始化 vue 实例、require/import 需要的插件、注入 router 路由、引入 store 状态管理）

# static 文件夹

> webpack 默认存放静态资源（css、image）的文件夹，与 assets 不同的是：static 在打包时会直接复制一个同名文件夹到 dist 文件夹里（不会经过编译，可使用相对路径）

# 其他文件

- [.babelrc](./new-project/.babelrc)
  浏览器解析的兼容配置，该文件主要是对预设（presets）和插件（plugins）进行配置，因此不同的转译器作用不同的配置项，大致可分为：语法转义器、补丁转义器、sx 和 flow 插件
- [.editorconfig](./new-project/.editorconfig)
  用于配置代码格式（配合代码检查工具使用，如：ESLint，团队开发时可统一代码风格），这里配置的代码规范规则优先级高于编辑器默认的代码格式化规则
- [.eslintignore](./new-project/.eslintignore)
  eslint 校验时需要忽略的文件
- [.eslintrc.js](./new-project/.eslintrc.js)
  eslint 校验规则
- [.gitignore](./new-project/.gitignore)
  配置 git 提交时需要忽略的文件
- [postcssrc.js](./new-project/postcssrc.js)
  autoprefixer（自动补全 css 样式的浏览器前缀）；postcss-import（@import 引入语法）、CSS Modules（规定样式作用域）
- [index.html](./new-project/index.html)
  项目入口页面，编译之后所有代码将插入到这来
- [package.json](./new-project/package.json)
  npm 的配置文件（npm install 根据 package.json 下载对应版本的安装包）
- [package.lock.json](./new-project/package.lock.json)
  npm install（安装）时锁定各包的版本号
- [README.md](./new-project/README.md)
  项目使用说明
