const Koa = require('koa')
const fs = require('fs')
// 使用fs.promises 访问 promise-based 文件系统方法
const fspromises = fs.promises
const app = new Koa()

const main = async ctx => {
  ctx.response.type = 'html'
  // 回调函数来解决异步
//   console.log(fs.readFile('./index.html',()=>{}),
//    fspromises.readFile('./index.html'))
  ctx.response.body = await fspromises.readFile('./index.html')
}

app.use(main)
app.listen(3000)