// const path = require('path')

module.exports = {
  // --------------------------------常用字段--------------------------------
  // 告诉dev-server在服务器启动后打开浏览器。将其设置true为打开默认浏览器。
  open: true,
  // 指定要使用的主机。默认情况下这是localhost。如果您希望外部可以访问您的服务器，请像下面这样指定：host: '0.0.0.0'
  host: '0.0.0.0',
  // 指定用于侦听请求的端口号
  port: 8000,
  // 默认情况下，dev-server将通过HTTP提供。它可以选择通过HTTPS在HTTP/2上提供
  https: false,
  // 启用webpack的热模块替换功能
  hot: true,
  // 在没有页面刷新的情况下启用热模块替换（请参阅）作为构建失败时的后备
  hotOnly: false,
  // 设置代理
  // https://webpack.js.org/configuration/dev-server#devserverproxy
  proxy: null

  // -------------------------------不常用字段-------------------------------
  // 指定打开浏览器时导航到的页面。（注意是页面，不是路由）
  // openPage: 'other/page/',

  // 提供在服务器内部的所有其他中间件之前执行自定义中间件的能力。这可用于定义自定义处理程序
  // before: app => {},
  // 提供在服务器内部的所有其他中间件之后执行自定义中间件的能力。
  // after: (app, server) => {}

  // 向所有响应添加标头
  // headers: {
  //   'X-Custom-Foo': 'bar'
  // },

  // --------------------------------其它字段--------------------------------
  // 此选项允许您将允许访问开发服务器的服务列入白名单。
  // allowedHosts: [
  //   'host.com',
  //   'subdomain.host.com',
  //   'subdomain2.host.com',
  //   'host2.com'
  // ],
  // .可以用作子域通配符。.host.com将匹配host.com，www.host.com和任何其他子域host.com。
  // allowedHosts: [
  //   '.host.com',
  //   'host2.com'
  // ]

  // 为所服务的一切启用gzip压缩，默认为 false
  // compress: false,

  // 告诉服务器从哪里提供内容。只有在您想要提供静态文件时才需要这样做。devServer.publicPath 将用于确定应该从哪里提供捆绑包，并且优先。
  // contentBase: path.join(__dirname, 'public'),
  // 告诉dev-server查看该devServer.contentBase选项提供的文件。默认情况下禁用它。启用后，文件更改将触发整页重新加载。
  // watchContentBase: true
}
