FIFO Queue

- typeof
  变量存储的二进制 前三位 000 表示对象 010 表示函数 100 表述字符串
   110 表述布尔值 1 表示整数 0 表示浮点数 null 000(历史遗留问题) undefined 011

   - Object.prototype.toString.call() 可以准确的判断类型