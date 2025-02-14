FIFO Queue

- typeof
  变量存储的二进制 前三位 000 表示对象 010 表示函数 100 表述字符串
   110 表述布尔值 1 表示整数 0 表示浮点数 null 000(历史遗留问题) undefined 011

   - Object.prototype.toString.call() 可以准确的判断类型

   - substring slice
     第二个参数 不一样
     slice 第二个参数 endIndex 不包括，支持负数，反向取更灵活
     substring 第二个参数 endIndex 不包括，不支持负数，只能正向取
     slice 更优