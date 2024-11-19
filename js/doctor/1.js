// 编写一个函数，[1,2,3,4,5,6,7,8,9,0]
// return "(123) 456-7890"
function getPhoneNum(arr) {
            // 首先确保输入是一个包含10个数字的数组
            if (arr.length !== 10) {
                console.log('号码错误');
            }
        
            // 使用模板字符串来格式化电话号码
            const nums = `(${arr.slice(0, 3).join('')}) ${arr.slice(3, 6).join('')}-${arr.slice(6).join('')}`;
        
            return nums;
        }
        console.log(getPhoneNum([1,2,3,4,5,6,7,8,9,0]));