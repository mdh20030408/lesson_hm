// 受限 栈顶操作 push pop
const stack = []; // 一次性分配一个空间
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.push(5);

const peek = stack[stack.length - 1];

const pop = stack.pop();

const is_empty = stack.length === 0;