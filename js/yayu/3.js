function Person(name,age){
    console.log(this);
    this.name = name;
    this.age = age;
}

Person('昌总',19) // 普通方式运行
const dys=new Person('昌总',19) //构造方式运行
const dyf=new Person('啊威',20)