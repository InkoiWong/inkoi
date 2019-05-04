const devServer = require('./vue-config/devServer.config');
// const mutiPageConfig = require('./multiPage.config')

module.exports = {
  /**
   * 区分打包环境与开发环境
   * process.env.NODE_ENV === 'production'  (打包环境)
   * process.env.NODE_ENV === 'development' (开发环境)
   */

  // --------------------------------常用字段--------------------------------
  /**
   * 基本路径
   * Type: string
   * Default: '/'
   *
   * baseUrl 从 Vue CLI 3.3 起已弃用，请使用 publicPath
   */
  // baseUrl: process.env.NODE_ENV === 'production' ? "https://cdn.didabisai.com/" : '/',
  publicPath: '/',

  /**
   * 输出文件目录
   * Type: string
   * Default: 'dist'
   *
   * 当运行 vue-cli-service build 时生成的生产环境构建文件的目录。
   * 注意目标目录在构建之前会被清除 (构建时传入 --no-clean 可关闭该行为)。
   */
  outputDir: 'dist',

  /**
   * 静态资源目录
   * Type: string
   * Default: ''
   *
   * 放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录。
   */
  assetsDir: '',

  /**
   * eslint-loader 是否在保存的时候检查
   * Type: boolean | 'error'
   * Default: true
   *
   * 设置为 true 时，eslint-loader 会将 lint 错误输出为编译警告。默认情况下，警告仅仅会被输出到命令行，且不会使得编译失败。
   * 如果你希望让 lint 错误在开发时直接显示在浏览器中，你可以使用 lintOnSave: 'error'。这会强制 eslint-loader 将 lint 错误输出为编译错误，同时也意味着 lint 错误将会导致编译失败。
   */
  lintOnSave: true,

  /**
   * 生产环境是否生成 sourceMap 文件
   * Type: boolean
   * Default: true
   *
   * 如果你不需要生产环境的 source map，可以将其设置为 false 以加速生产环境构建。
   */
  productionSourceMap: true,

  // --------------------------------不常用字段--------------------------------
  /**
   * index.html 的输出路径
   * Type: string
   * Default: 'index.html'
   *
   * 指定生成的 index.html 的输出路径 (相对于 outputDir)。也可以是一个绝对路径。
   */
  indexPath: 'index.html',

  /**
   * 多页面
   * Type: Object
   * Default: undefined
   *
   * 在 multi-page 模式下构建应用。每个“page”应该有一个对应的 JavaScript 入口文件。其值应该是一个对象
   * 对象的 key 是入口的名字
   * 对象的 value 是：
   *    1、一个指定了 entry, template, filename, title 和 chunks 的对象 (除了 entry 之外都是可选的)；
   *    2、或一个指定其 entry 的字符串。
   */
  pages: undefined,
  // pages: {
  //   index: {
  //     // page 的入口
  //     entry: 'src/index/main.js',
  //     // 模板来源
  //     template: 'public/index.html',
  //     // 在 dist/index.html 的输出
  //     filename: 'index.html',
  //     // 当使用 title 选项时，
  //     // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
  //     title: 'Index Page',
  //     // 在这个页面中包含的块，默认情况下会包含
  //     // 提取出来的通用 chunk 和 vendor chunk。
  //     chunks: ['chunk-vendors', 'chunk-common', 'index']
  //   },
  //   // 当使用只有入口的字符串格式时，
  //   // 模板会被推导为 `public/subpage.html`
  //   // 并且如果找不到的话，就回退到 `public/index.html`。
  //   // 输出文件名会被推导为 `subpage.html`。
  //   subpage: 'src/subpage/main.js'
  // },
  // 引入多页面配置文件
  // pages: mutiPageConfig,

  /**
   * Type: Array<string | RegExp>
   * Default: []
   *
   * 默认情况下 babel-loader 会忽略所有 node_modules 中的文件。如果你想要通过 Babel 显式转译一个依赖，可以在这个选项中列出来。
   */
  transpileDependencies: [],

  // -------------------------------loader相关配置---------------------------------
  css: {
    /**
     * 启用 CSS modules for all css / pre-processor files.
     * Default: false
     */
    modules: false,

    /**
     * 是否使用css分离插件 ExtractTextPlugin
     * Default: 生产环境下是 true，开发环境下是 false
     */
    extract: process.env.NODE_ENV === 'production',

    /**
     * 开启 CSS source maps?
     * Default: false
     */
    sourceMap: false,

    /**
     * css预设器配置项
     */
    loaderOptions: {
      css: {
        // 这里的选项会传递给 css-loader
      },
      postcss: {
        // 这里的选项会传递给 postcss-loader
      },
      less: {
        // 这里的选项会传递给 less-loader
      },
      sass: {
        // 这里的选项会传递给 sass-loader
      },
      stylus: {
        // 这里的选项会传递给 stylus-loader
      }
    }
  },

  // ------------------------------webpack 相关配置--------------------------------
  /**
   * webpack 自定义配置
   * Type: Object | Function
   *
   * 如果这个值是一个对象，则会通过 webpack-merge 合并到最终的配置中。
   * 如果这个值是一个函数，则会接收被解析的配置作为参数。该函数及可以修改配置并不返回任何东西，也可以返回一个被克隆或合并过的配置版本。
   * 如果你需要基于环境有条件地配置行为，或者想要直接修改配置，那就换成一个函数 (该函数会在环境变量被设置之后懒执行)。该方法的第一个参数会收到已经解析好的配置。在函数内，你可以直接修改配置，或者返回一个将会被合并的对象
   *
   * https://cli.vuejs.org/zh/guide/webpack.html
   */
  // configureWebpack: {
  //   plugins: [
  //     new MyAwesomeWebpackPlugin()
  //   ]
  // },
  configureWebpack: config => {
    if (process.env.NODE_ENV === 'production') {
      // 为生产环境修改配置...
    } else {
      // 为开发环境修改配置...
    }
  },
  // 如果想要引入babel-polyfill可以这样写
  // configureWebpack: (config) => {
  //   config.entry = ["babel-polyfill", "./src/main.js"]
  // },

  /**
   * webpack 链式操作 (高级)
   * Type: Function
   *
   * 是一个函数，会接收一个基于 webpack-chain 的 ChainableConfig 实例。允许对内部的 webpack 配置进行更细粒度的修改。
   */
  chainWebpack: config => {},

  /**
   * webpack-dev-server 相关配置
   * Type: Object
   *
   * 所有 webpack-dev-server 的选项都支持
   *
   * https://webpack.js.org/configuration/dev-server/
   */
  devServer: devServer,

  // --------------------------------其它字段--------------------------------
  filenameHashing: true,
  crossorigin: undefined,
  integrity: false,
  runtimeCompiler: false,

  // use thread-loader for babel & TS in production build
  // enabled by default if the machine has more than 1 cores
  parallel: require('os').cpus().length > 1,

  // 是否启用dll
  // See https://github.com/vuejs/vue-cli/blob/dev/docs/cli-service.md#dll-mode
  // dll: false,

  // PWA 插件相关配置
  // see https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa
  pwa: {},

  // ---------------------------------------------------------------------
  // 第三方插件配置
  pluginOptions: {
    // ...
  }
};
