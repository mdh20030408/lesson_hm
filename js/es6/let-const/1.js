// 大厂语法基础题
//局部作用域
function sayHello() {
  //变量
  var name="小明";
  var name="小红";
  
  return "Hello"+name;


}
//console.log(sayHello())
// es5 全局作用域
var age =10;
//代码块
//块级作用域
if(age>5){
    // es6 新增的let 变量声明 2015年
    var name="过帅";
    let dogYears = age*7;
    console.log("You are "+dogYears+" dog years old")
}
console.log(name,'name')
//dogYears用let声明的变量，只能在if语句块中访问
ole.log(dogYears,'dogYears')
console.log(sayHello())