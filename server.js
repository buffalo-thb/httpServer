const path = require('path')

const express = require('express')
const artExpress = require('express-art-template')

const app = express();
// 静态资源缓存时间10天，单位毫秒
const MAX_AGE = 1000 * 60 * 60 * 24 * 10;

// 设置模板路径
app.set('views', path.join(__dirname, 'views'));
// 模版引擎
app.engine('art', artExpress)
app.set('view engine', 'art');

// 设置静态资源默认目录
app.use(express.static(path.join(__dirname, 'public'), {
  maxAge: 7 * 24 * 60 * 60 * 1000,
}))
// html模板路由
app.get('/test/index', (req, res) => {
  res.render('index')
})
// 模拟api
app.get('/api/header', (req, res) => {
  // console.log('请求头', req);
  res.send({
    code: 0,
    message: 'success',
    data: req.headers
  })
})

app.listen(3000, () => {
  console.log('服务器已启动')
})