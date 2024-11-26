let obj={
    name:'daoge',
    job:'forntend master',
    company:'tiktok'
}

obj.hometown = "南昌"
let a = 1;
// 拷贝
let b = a;
b=3;
// 引用式赋值
 let obj2 = obj;
 obj2.name ="xiaoqinlin"
 console.log(a,b)
 console.log(obj,obj2)