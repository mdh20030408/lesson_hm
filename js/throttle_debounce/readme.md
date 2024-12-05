- 认识几个url
  url的设计模式 restful api 资源api
  网站是用来暴露资源的 如何将资源暴露出去 
  - http://localhost:3001/posts/ 列表页的链接
  - http://localhost:3001/posts/:id  id 查询参数  详情页的链接
  - http://localhost:3001/users/id   用户主页链接

- 数据的查询  Read 
- 访问资源的方式
  - apiFox 是啥？  web 请求代理
    Get http://localhost:3001/posts/1 
    Patch http://localhost:3001/posts/1 
  - 资源 db.json  users posts
  