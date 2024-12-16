# js 类型转换

- es6 之前, js有多少种类型
  - Number
  - Bollean
  - undefined
  - Null
  - String
- 复杂类型，引用式赋值
  - Object

- 为什么js 类型会改变
  Number("1")

- JS 是弱类型语言
- 变量的类型 是可以改变的
- 搞清楚变量的确切类型
  - Primitive 类型 -> 其他类型的转换
    - Boolean
  - Object 类型 -> 其他类型的转换

- Boolean 显示类型转换(构造函数)规则
  - false 的情况
    - 为空 false
    - false
    - undefined
    - null
    - -0
    - +0

  - true

- +0 -0 
  Object.is()
  1/+0,1/-0 Infinity -Infinity
- NaN
  类型仍然是Number，表示一个特殊的数字

- Number()
  0 1 NaN 
  
如果提供了 value，则返回由 ToNumber（value） 计算的 Number 值（不是 Number 对象），否则返回 +0。

- String()
