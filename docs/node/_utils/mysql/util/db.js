const mysql = require('mysql');

const pool = mysql.createPool({
  host: '127.0.0.1',
  user: 'root',
  password: '123456',
  database: 'koa_demo'
});

let query = function(sql, values) {
  return new Promise((resolve, reject) => {
    // 调用connection，判断连接是否成功，如果失败，则把错误信息打印出来，并且停止运行
    pool.getConnection(function(err, connection) {
      if (err) {
        reject(err);
      } else {
        // 向数据库发送sql语句，并且把用回调函数返回结果

        // 其中回调函数中有三个参数
        // 第一参数是错误对象，如果操作失败，则会停止并打印错误信息
        // 第二参数是具体的返回的结果，正常情况下是一个数组，里面包含很多json
        // 第三个参数也是一个数组，里面包含着最每个数据的解释，比如当前数据属于哪个库，那张表等等
        connection.query(sql, values, (err, rows, fields) => {
          if (err) {
            reject(err);
          } else {
            // 成功即返回目标结果
            resolve(rows);
          }

          // 注意：一个事件就有一个从开始到结束的过程，数据库会话操作执行完后，就需要关闭掉，以免占用连接资源。
          connection.release();
        });
      }
    });
  });
};

module.exports = {
  query
};
