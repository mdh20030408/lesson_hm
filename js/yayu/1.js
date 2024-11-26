// js 造人
// 对象字面量
  let cao ={
    name:'小超'
}
let fan ={
    name:'范总',
    age:17
}
// class es6才有
class Person{
    constructor(name,age){
        this.name = name
        this.age = age
    }
eat(){
    console.log('吃饭');
}

}

let wei = new Person('阿伟',18)
let guo = new Person('阿古',19)