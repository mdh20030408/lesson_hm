let a = null;// 栈内存
console.log(a);
// 堆内存
let largeObject={
    data:new Array(10).fill('a')
}
// 释放内存 垃圾回收
// 哲学
largeObject=null;