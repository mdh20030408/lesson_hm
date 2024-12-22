var a = 1.23 ;
console.log(typeof a); //number
var b = new Number(a); // Number 对象
console.log(typeof b); //object
console.log(b.toFixed(1)) // 1.2
// 面向对象极致风格  toFixed(a) 函数式
console.log(a.toFixed(1)) // 1.2 包装类
console.log((new Number(a)).toFixed(1))
// 依然还是 number 简单数据类型, 