const key = 'abc123'
let points=50
let winner = false

const person={
    name:'Wes',
    age:28
}
// 函数是对象，是object 中的静态方法
// const wes =Object.assign({},person )
// console.log(wes)
// wes.age=30
// console.log(wes,person);

const wes = Object.freeze(person)
person.age = 21
wes.hometown='萍乡'
console.log(wes)