// 代码可读性 
function generateRandomGender() {
    // return Math.random() < 0.5? '男' : '女';
//     const randomValue = Math.random();
//     if (randomValue < 0.5) {
//         return '男孩';
//     } else {
//         return '女孩';
//     }
// }
// console.log(generateGender());
const genders=['male','female'];
return genders[Math.floor(Math.random()*genders.length)]
}