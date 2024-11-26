// function add(x,y){
//     return x+y;
// }
// 和普通函数的区别在哪？
// 构造对象的过程 构造函数 constructor
function Person(name,age){
    this.name = name;
    this.age = age;
}

const wen = new Person('文',18);
console.log(wen.age,wen.name);
const chen = new Person('陈',19);
console.log(chen.age,chen.name);