- es6 promise
  Promise 类, 专门解决异步耗时性问题, 执行流程可控,
  其他大型语言一般是同步的, js 通过es6 promise 解决了, 单线程, 异步不好控制的问题
  promise 让异步变同步 提供了完善解决异步任务的机制
  - 口袋 装耗时性的内容 executor 立即执行
    - resolve reject 两个函数参数
    - resolve 成功解决promise, then执行
    - reject 失败了 catch 执行
  - then 方法 等他完成后
    resolve(data) 后执行回调函数, data 传给回调函数
  - catch 方法
    reject(error) 后执行回调函数, error 传给回调函数
  - promise 三种状态
    - pending 等待 实例化后, resolve 之前 或 reject 之前
    - fulfilled 成功 resolve之后, 从pending 状态到 fulfilled 状态
    - rejected 失败 reject 之后 得从pending 状态到rejected 状态

    promise 诺言 状态只会从pending 切换到 fulfilled 或者 rejected , 状态一旦确定, 就不会再变了。
