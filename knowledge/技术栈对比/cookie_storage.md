# cookie 与 storage 的对比

https://www.cnblogs.com/pengc/p/8714475.html

## cookie (html4)

一、cookie 和 session

`cookie` 和 `session` 都是用来跟踪浏览器用户身份的会话方式。

浏览器的缓存机制提供了可以将用户数据存储在客户端上的方式，可以利用 cookie,session 等跟服务端进行数据交互。

1.  cookie 保存在浏览器端，session 保存在服务器端
2.  cookie 是`服务器发送`给客户端的特殊信息，cookie 是以文本的方式保存在客户端，`每次请求时都带上它`
    通常使用 cookie 方式存储 sessionid 到客户端，在交互中浏览器按照规则将 sessionid 发送给服务器
3.  cookie 保存用户登录信息状态，session 保存用户的专用会话信息

## storage (html5)

一、localStorage 和 sessionStorage

Web Storage 存储机制是对 HTML4 中 cookie 存储机制的一个改善。由于 cookie 存储机制有很多缺点，HTML5 不再使用它，转而使用改良后的 Web Storage 存储机制。

本地数据库是 HTML5 中新增的一个功能，使用它可以在客户端本地建立一个数据库，原本必须保存在服务器端数据库中的内容现在可以直接保存在客户端本地了，这大大减轻了服务器端的负担，同时也加快了访问数据的速度。

## 对比

1.  存储空间更大：cookie 为 `4KB`，而 WebStorage 是 `5MB`；
2.  节省网络流量：WebStorage 不会传送到服务器，存储在本地的数据可以直接获取，也不会像 cookie 一样每次请求都会传送到服务器，所以减少了客户端和服务器端的交互，节省了网络流量；
3.  对于那种只需要在用户浏览一组页面期间保存而关闭浏览器后就可以丢弃的数据，sessionStorage 会非常方便；
4.  快速显示：有的数据存储在 WebStorage 上，再加上浏览器本身的缓存。获取数据时可以从本地获取会比从服务器端获取快得多，所以速度更快；
5.  安全性：WebStorage 不会随着 HTTP header 发送到服务器端，所以安全性相对于 cookie 来说比较高一些，不会担心截获，但是仍然存在伪造问题；
6.  数据操作更方便
