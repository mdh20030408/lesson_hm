// es6 class 
 class MyQuene{
 constructor(){
    // 后进后出
    this.stk1= [];
    // 辅助先进先出
    this.stk2= [];
 }
 push(x){
    this.stk1.push(x);
 }
 pop(){
    // 不为空，那么stk2 的顶部就是队列
    if(this.stk2.length===0){
        while(this.stk1.length>0){
            this.stk2.push(this.stk1.pop());
        }
    }
    return this.stk2.pop();
 }
 peek(){
    if(this.stk2.length===0){
        while(this.stk1.length > 0){
            this.stk2.push(this.stk1.pop());
        }
    }
     return this.stk2[this.stk2.length-1];
 }
 empty(){
    return this.stk1.length===0&&this.stk2.length===0;
 }
}