// 实例化时, 传递函数, 里面装耗时性任务
const p = new Promise((resolve,reject) => { // exeutor 执行器
    console.log('333') //同步任务
  setTimeout(() => { // 异步任务 event loop
    console.log('222')
    // resolve()  执行完后, 把promise的状态改为成功
    resolve('Promise真好')
  }, 1000);
})
// 异步任务的执行顺序控制好的话 用promise()
console.log(p.__proto__)
p
.then((data) => {
    // 等到executor 异步任务执行完后, 再执行then里面的函数
  console.log('111')
  console.log(data)
})
.catch(()=>{
console.log('error')
})