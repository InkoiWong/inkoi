[English](./vue3项目创建.md) | 简体中文

## 一、安装 node 环境

node 10.15.3
npm 6.4.1

```
node -v
npm -v
```

## 二、npm 配置镜像站（提升速度，推荐使用淘宝源）

```
npm config set registry=http://registry.npm.taobao.org
```

## 三、vue-cli3 安装

> 可能需要先卸载 vue-cli2，再安装 vue-cli3

```
npm uninstall vue-cli -g
npm install @vue/cli -g
```

> 如果 cli3.x 用的不舒服，cli3 也能使用 2.x 模板

```
npm install -g @vue/cli-init
vue init webpack '项目名称'
```

## 四、零配置启动/打包一个 .vue 文件

> 这是个很棒的功能，用于开发一个库、组件，做一些小 demo 等都是非常适合的！

```
npm install -g @vue/cli-service-global // 安装全局拓展
```

```
vue serve App.vue // 启动服务
vue build App.vue // 打包出生产环境的包并用来部署
```

## 五、从零开始创建项目

> 1 创建命令

```
vue create '项目名称'
```

> 2 选择模板

- 一开始只有两个选项: default(默认配置)和 Manually select features(手动配置)
  默认配置只有 babel 和 eslint 其他的都要自己另外再配置，所以我们选第二项手动配置。
- 在每次选择手动配置之后，会询问你是否保存配置，也就是新加的 koro 选项，
  这样以后我们在进行创建项目的时候只需使用原先的配置就可以了，而不用再进行配置。

> 3 选择配置

- 根据你的项目需要来选择配置,空格键是选中与取消，A 键是全选
  ( ) Babel
  ( ) TypeScript // 支持使用 TypeScript 书写源码
  ( ) Progressive Web App (PWA) Support // PWA 支持
  ( ) Router // 支持 vue-router
  ( ) Vuex // 支持 vuex
  ( ) CSS Pre-processors // 支持 CSS 预处理器。
  ( ) Linter / Formatter // 支持代码风格检查和格式化。
  ( ) Unit Testing // 支持单元测试。
  ( ) E2E Testing

> 4 是否使用路由的 history 模式

- 这里我建议选 No，这样打包出来丢到服务器上可以直接使用了，后期要用的话，也可以自己再开起来。
  选 yes 的话需要服务器那边再进行设置。

> 5 选择 css 预处理器

- 如果你选择了 Css 预处理器选项，会让你选择这个
  SCSS/SASS
  LESS
  Stylus

> 6 选择 Eslint 代码验证规则

- 根据团队习惯选择
  ESLint with error prevention only
  ESLint + Airbnb config
  ESLint + Standard config
  ESLint + Prettier

> 7 选择什么时候进行代码规则检测

- 建议选保存就检测，等到 commit 的时候，问题可能都已经积累很多了。
  ( ) Lint on save // 保存就检测
  ( ) Lint and fix on commit // fix 和 commit 时候检查

> 8 把 babel,postcss,eslint 这些配置文件放哪

- 通常我们会选择独立放置，让 package.json 干净些
  In dedicated config files // 独立文件放置
  In package.json // 放 package.json 里

> 9 是否保存配置

- Save this as a preset for future projects? (Y/n) // 是否记录一下以便下次继续使用这套配置
  Save preset as: name // 然后你下次进入配置可以直接使用你这次的配置了

> 10 选择用于安装的包管理器

- 如果安装了多个的话
  Use Yarn
  Use NPM

> 11 下载安装并创建项目

- [新创建的项目](./new-project/src/App.vue)

> 12 webpack 配置

- 一起来看一下新项目的结构,会发现 2.x 的 webpack 配置的目录不见了，也就是没有 build、config 这两个文件夹了
- 这种方式的优势对小白来说非常友好，不会一上来就两个文件夹，一堆文件，看着脑袋都大了。
- 然后在引用抄别人的配置的时候，也非常方便，直接将文件复制过来就好了。

> 13 自定义 webpack 配置

- 在自定义一下 webpack 的配置，我们需要在根目录新建一个 [vue.config.js](./new-project/vue.config.js) 文件
  文件中应该导出一个对象，然后进行配置
  详情查阅[官方文档](https://cli.vuejs.org/zh/config/#vue-config-js)

  [配置指南](./vue3项目自定义webpack配置.zh-CN.md)

> 14 启动项目本地开发

```
cd new-project
npm run serve // 不是之前的 npm run dev
```

- [本地调试地址](http://localhost:8080)

> 15 打包上线

```
npm run build
```

- [项目生产环境](./new-project/dist/index.html)
