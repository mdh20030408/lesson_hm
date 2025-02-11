const Koa = require('koa');
const app = new Koa();
const route = require('koa-route');


// 中间件本质是函数
// const main = ctx => {
//   if ( ctx.request.path !== '/' ) { // 不是首页
//     ctx.response.type = 'html';
//     ctx.response.body = '<a href="/">IndexPage</a>';
//   } else {
//     ctx.response.type = 'text';
//     ctx.response.body = '<h1>Hello World</h1>';
//   }
// }

const main = ctx =>{
    ctx.response.body = 'Hello World'
}
const about = ctx =>{
    ctx.response.body = '<a href="/">IndexPage</a>'
    ctx.response.type = 'html' 
}

// app.use(main); //启用中间件
app.use(route.get('/',main))
app.use(route.get('/about',about))
app.listen(3000);