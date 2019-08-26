var express = require('express')
var app = express()
var mysql = require('mysql')
var http = require('http').Server(app)
app.set('view engine', 'ejs')
app.use(express.static('./public'))
//创建mysql
var connection = mysql.createConnection({
  host: '127.0.0.1',
  port: '3306',
  user: 'root',
  password: '123456',
  database: 'yin'
})
//连接mysql
connection.connect()
// 登录首页
app.get('/', function(req, res) {
  var list_sql = 'select  * from images'
  connection.query(list_sql, function(err, result) {
    if (err) {
      console.log(err)
      return false
    }
    // result = JSON.stringify(result)
    res.render('huaban', {
      imglist: result
    })
  })
})
//监听端口
http.listen(3000)
