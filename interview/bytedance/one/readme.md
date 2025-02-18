# 字节戴的第一场面试准备

- 穷追猛打

- 基于学长的三个项目(两个) 改一改, 加到自己的简历中
  执行力 简历给我 100+ 小公司投递(周末) 周一+面试
- 小公司练手 (够用) 150 小公司实习
- 边上课, 写项目 (3月20, 第二版简历) 中等 200-300
   - 远程 ai + react 远程实习 2个月
- 四月中旬 源码 算法 react/vue 成熟简历 400+

- promise.all
  - fs.readfile node 异步
    java/python 阻塞 
    node 异步无阻塞 no blocking 性能极好 node服务器开销只有java的 20% - 30%。 服务器性能提升 少用服务器
  - I/O 异步 不好控制执行顺序 
    - callback 回调 es5
    - promise
    - async await

    按顺序读取
    I/O 比较慢 (硬盘) 内存 (读取速度比较)
  - es5 callback , es6 promise, es8 async await
    异步变同步
    js 异步解决方案在进化
    callback 回调地狱被诟病 早期没那么复杂的业务
    promise 链式调用上场了 then return promise
    async await 基于promise await + promise 跟同步写法一样了
  - promise
  - return promise thenable
  - 封装一个promise 函数
  - 表达的简洁性
- 异步任务 并发怎么办?

- 多个异步任务 all

  - **promise 实例**放到一个数组里面
  - **promise.all()** 方法接受一个数组作为参数，数组中的每个元素都是一个Promise 实例
  - 所有的promise 都执行完了，才会返回结果
  - 如果有一个promise 失败了 就返回失败的结果

  - race
    返回第一个被解决的任务 不管是成功还是失败

  - allsettled
    返回所有的结果 不管是成功还是失败

  - any 
    只要有一个成功 就返回成功的结果
  
  - 并发 -> 并行

  - 手写题的套路
    - 通过注释的方式 表达自己的思路

  - react 性能优化
    - useMemo
    - useCallback

    - interface ts 的核心概念
      自定义类型的一个方式
      type  区别
       - 子组件 props
       - 父组件必须提供Props 约定的参数
    - 组件响应式
      - 改变后 组件函数是会重新运行的
        - 开销大
        - 性能问题
        - 没有必要
    - React.memo 缓存组件
      当子组件props之外的改变时, 子组件无关, 不更新
      raect 不分 props emit 都叫props
    - react 有哪些hooks介绍一下
      - 性能优化相关的
