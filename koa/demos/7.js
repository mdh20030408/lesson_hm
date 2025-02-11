const Koa = require('koa');
const route = require('koa-route');
const app = new Koa();

const redirect = ctx =>{
    // 302 重定向
   ctx.response.redirect('/')
}

const main = ctx =>{
    //    ctx.body = 'hello world'
    // 抛出一个错误
    //    ctx.throw(500)
    ctx.status = 404;
    ctx.body='page not found'
}
app.use(route.get('/',main))
app.use(route.get('/redirect',redirect))

app.listen(3000)