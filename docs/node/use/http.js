// https://www.cnblogs.com/softwarefang/p/7053178.html

// --------------------------------------

var http = require('http');
var querystring = require('querystring');

//启动服务
http
  .createServer(function(req, res) {
    console.log('请求到来，解析参数');
    //解析post请求
    var post = '';
    req.on('data', function(chunk) {
      post += chunk;
    });
    req.on('end', function() {
      post = querystring.parse(post);
      //解析完成
      console.log('参数解析完成，返回name参数');
      res.end(post.name);
    });
  })
  .listen(3000);
// 客户端请求
var contents = querystring.stringify({
  name: 'will',
  age: 21,
  address: 'shanghai'
});
//声明请求参数
var options = {
  host: 'localhost',
  path: '/',
  port: 3000,
  method: 'POST',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
    'Content-length': contents.length
  }
};
//发送请求
var req = http.request(options, function(res) {
  res.setEncoding('utf-8');
  res.on('data', function(data) {
    console.log('后台返回数据');
    console.log(data);
  });
});
req.write(contents);
//必须结束
req.end();

// --------------------------------------

// var http = require('http');
// var url = require('url');
// var util = require('util');
// //启动服务
// http
//   .createServer(function(req, res) {
//     console.log('请求到来 解析参数');
//     var params = url.parse(req.url, true);
//     console.log('解析完成');
//     console.log(util.inspect(params));
//     console.log('向客户端返回');
//     res.end(params.query.name);
//   })
//   .listen(3000);
// //客户端请求
// http.get(
//   {
//     host: 'localhost',
//     path: '/user?name=will&age=21',
//     port: 3000
//   },
//   function(res) {
//     res.setEncoding('utf-8');
//     res.on('data', function(data) {
//       console.log('服务端返回响应回来的数据' + data);
//     });
//   }
// );
