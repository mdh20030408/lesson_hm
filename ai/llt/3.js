// 生成一个18岁到55岁的随机年龄
function generateRandomAge(){
    return Math.floor(Math.random()*(55-18+1))+18;
}
// function generateAge(minAge, maxAge) {
//     // 确保minAge和maxAge是整数
//     minAge = Math.ceil(minAge);
//     maxAge = Math.floor(maxAge);
    
//     // 生成指定范围内的随机整数
//     return Math.floor(Math.random() * (maxAge - minAge + 1)) + minAge;
// }

// // 测试函数
// console.log(generateAge(18, 55));