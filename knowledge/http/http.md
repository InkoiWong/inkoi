## http 协议

- 定义

超文本传输协议，是一个基于请求与响应，无状态的，应用层通信协议，
常基于 TCP/IP 协议传输数据，互联网上应用最为广泛的一种网络协议。
通过这个协议定义一个客户端和服务器端之间请求和应答的标准。

- url

我们在浏览器的地址栏里输入的网站地址叫做 URL，统一资源定位符。浏览器通过 HTTP，就能将 Web 服务器上该站点的内容提取出来。

## http 版本

- http0.9
  HTTP 协议的最初版本，功能简陋，仅支持请求方式 GET，并且仅能请求访问 HTML 格式的资源。

- http1.x
  缺陷：线程阻塞，在同一时间，同一域名的请求有一定数量限制，超过限制数目的请求会被阻塞

- http1.0
  缺陷：浏览器与服务器只保持短暂的连接，浏览器的每次请求都需要与服务器建立一个 TCP 连接（TCP 连接的新建成本很高，因为需要客户端和服务器三次握手），服务器完成请求处理后立即断开 TCP 连接，服务器不跟踪每个客户也不记录过去的请求

- http1.1
  改进点：
  1 持久连接：一个 TCP 连接建立后，默认不会断开，connect：keep-alive
  2 管道机制：在同一个 TCP 连接里，允许多个请求同时发送，增加了并发性，进一步改善了 HTTP 协议的效率
  3 分块传输编码：服务器每产生一块数据，就发送一块，采用"流模式"（stream）取代"缓存模式"（buffer）
  4 新增请求方式
  缺点：
  虽然允许复用 TCP 连接，但是同一个 TCP 连接里面，所有的数据通信是按次序进行的。
  服务器只有处理完一个请求，才会接着处理下一个请求。如果前面的处理特别慢，后面就会有许多请求排队等着。这将导致“队头堵塞”

- http2.0
  特点：
  1 二进制格式：将文本格式转变为二进制格式，二进制协议解析起来更高效
  2 完全多路复用：HTTP/2 复用 TCP 连接，在一个连接里，客户端和浏览器都可以同时发送多个请求或回应，实现了并行的功能
  3 使用报头压缩：将所有的信息字段建立一张表，为表中的每个字段建立索引，客户端和服务端共同使用这个表，他们之间就以索引号来表示信息字段
  4 服务器推送：允许服务器未经请求，主动向客户端发送资源

## WebSocket

1.

## TCP/IP

https://www.cnblogs.com/buxiangxin/p/8336022.html

- 定义

TCP/IP 是用于因特网 (Internet) 的计算机通信协议。
它定义了电子设备（比如计算机）如何连入因特网，以及数据如何在它们之间传输的

- 三次握手

详细的理论：

1.  Client：
    SYN=1
    seq=j
    Client 状态=SYN_SENT
2.  Server：
    确认 SYN=1？
    SYN=1
    ACK=1
    ack=j+1
    seq=k
    Server 状态=SYN_RCVD
3.  Client：
    确认 ack=j+1？
    确认 ACK=1？
    ACK=1
    ack=k+1
4.  Server：
    确认 ack=k+1？
    Client、Server 状态=ESTABLISHED

简洁的理论：

1.  Client 发送 SYN 包
2.  Server 确认 SYN 包，发送 SYN+ACK 包
3.  Client 确认 SYN+ACK 包，发送 ACK 包

抽象的举例：

1.  A：Hi 美女，你好，你叫什么名字？。
2.  B：你好，我叫 xxx，你呢？。
3.  A：我叫 yyy，很高兴认识你。

- 四次挥手

详细的理论：

1.  Client：
    Fin=1
    seq=m
    Client 状态=FIN_WAIT_1
2.  Server:
    确认 Fin=1？
    ack=m+1
    Server 状态=CLOSE_WAIT
    Client 状态=FIN_WAIT_2
3.  Server:
    Fin=1
    seq=n
    Server 状态=LAST_ACK
4.  Client：
    确认 Fin=1？
    ack=n+1
    Client 状态=TIME_WAIT
5.  Server：
    确认 ack=n+1？
    Server 状态=CLOSED

简洁的理论：

1.  Client 发送 Fin 包
2.  Server 确认 Fin 包，发送 ACK 包
3.  Server 发送 Fin 包
4.  Client 确认 Fin 包

抽象的举例：

1.  A：我要走了。
2.  B：好的，我知道了，你稍等一下。
3.  B：这时我的电话，以后再联系吧，再见啦。
4.  A：好的，我保存好了，再见。

## https

- 定义

HTTPS 是身披 SSL 外壳的 HTTP
经由 HTTP 进行通信，在 HTTP 和 TCP 之间添加一个安全协议层（SSL 或 TSL），这个时候，就成了我们常说的 HTTPS。
HTTPS 使用的主要目的是`提供对网站服务器的身份认证`，同时`保护交换数据的隐私与完整性`。

- SSL 原理

1.  Client 请求 https 链接
2.  Server 发送（CA 证书，公钥）
3.  Client 验证 CA 有效性
4.  Client 生成 随机密钥
5.  Client 使用 公钥 对 随机密钥 加密，并发送至 Server
6.  Server 使用 私钥 对 随机密钥 解密，得到 对称密钥
7.  Client 和 Server 共同使用 对称密钥 进行 密文通信

- https 与 http 的区别

1.  HTTPS 是加密传输协议，HTTP 是明文传输协议;
2.  HTTPS 需要用到 SSL 证书，而 HTTP 不用;
3.  HTTPS 比 HTTP 更加安全，对搜索引擎更友好，利于 SEO;
4.  HTTPS 标准端口 443，HTTP 标准端口 80;
5.  HTTPS 基于传输层，HTTP 基于应用层;

- https 与 charles 抓包

## http 状态码

https://www.cnblogs.com/yzxing/p/9665109.html

分类：
[1**]：信息，服务器收到请求，需要请求者继续执行操作
[2**]：成功，操作被成功接收并处理
[3**]：重定向，需要进一步的操作以完成请求
[4**]：客户端错误，请求包含语法错误或无法完成请求
[5**]：服务器错误，服务器在处理请求的过程中发生了错误

常用：
200 - 请求成功
301 - 资源（网页等）被永久转移到其它 URL
304 - 未修改。所请求的资源未修改，服务器返回此状态码时，不会返回任何资源。客户端通常会缓存访问过的资源，通过提供一个头信息指出客户端希望只返回在指定日期之后修改的资源
400 - 客户端请求的语法错误，服务器无法理解
403 - 服务器理解请求客户端的请求，但是拒绝执行此请求
404 - 请求的资源（网页等）不存在
405 - 客户端请求中的方法被禁止
500 - 服务器内部错误，无法完成请求
502 - 作为网关或者代理工作的服务器尝试执行请求时，从远程服务器接收到了一个无效的响应
505 - 服务器不支持请求的 HTTP 协议的版本，无法完成处理

200 - 正常
304 - 协商缓存
400 - 前端语法有误
403 - 没有权限，禁止访问
404 - 接口不存在
500 - 服务器错误
502 - 断网

```js
var HTTP_STATUS_CODES = {
  100: 'Continue',
  101: 'Switching Protocols',
  200: 'OK',
  201: 'Created',
  202: 'Accepted',
  203: 'Non-Authoritative Information',
  204: 'No Content',
  205: 'Reset Content',
  206: 'Partial Content',
  300: 'Multiple Choice',
  301: 'Moved Permanently',
  302: 'Found',
  303: 'See Other',
  304: 'Not Modified',
  305: 'Use Proxy',
  307: 'Temporary Redirect',
  400: 'Bad Request',
  401: 'Unauthorized',
  402: 'Payment Required',
  403: 'Forbidden',
  404: 'Not Found',
  405: 'Method Not Allowed',
  406: 'Not Acceptable',
  407: 'Proxy Authentication Required',
  408: 'Request Timeout',
  409: 'Conflict',
  410: 'Gone',
  411: 'Length Required',
  412: 'Precondition Failed',
  413: 'Request Entity Too Large',
  414: 'Request-URI Too Long',
  415: 'Unsupported Media Type',
  416: 'Requested Range Not Satisfiable',
  417: 'Expectation Failed',
  422: 'Unprocessable Entity',
  500: 'Internal Server Error',
  501: 'Not Implemented',
  502: 'Bad Gateway',
  503: 'Service Unavailable',
  504: 'Gateway Timeout',
  505: 'HTTP Version Not Supported'
};
```
