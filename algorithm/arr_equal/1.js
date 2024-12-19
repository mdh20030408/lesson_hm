const scores =[85,73,92,67,55];
// 高于90分的
// array es6 新增的方法
const hasHighScores = scores.some(score => score > 90);
console.log(hasHighScores); // true
console.log(scores.every(score => score > 90));

const hasEvenNumber = scores.some(score => score % 2 === 0);
console.log(hasEvenNumber); // true

console.log([1,2,3].indexOf(2),[1,2,3].indexOf(4),[1,2,3].indexOf(1))