console.log(1/+0) // 正无穷大
console.log(1/-0) // 负无穷大
console.log(Object.is(5,5));
console.log(Object.is(+0,-0));
// 隐式转换
// NaN not a number -> 
console.log(2*"a",2+"a");
console.log(typeof NaN)
console.log(parseInt("abc"))
console.log(parseInt("123abc"))
console.log(NaN===NaN) // 不代表确切值
// 不能通过=== 去判断，所以要用 isNaN
console.log(isNaN(NaN),isNaN(parseInt("abc")))