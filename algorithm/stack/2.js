// Stack 类
class ArrayStack{
    // 类的属性
    // public 公有 类的外部, 内部, 子类 都可以访问
    // privite 私有 类的外部 不能访问 子类 也不能访问
    // protected 保护类型 类的外部不能访问 子类可以访问
    #stack;
    constructor(){
        this.#stack = [];
        this.items = 1;
    }
}

    const stack = new ArrayStack();
    console.log(stack.items);