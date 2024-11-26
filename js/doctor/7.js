let a = 'Hello World!';
function sayhi() {
  console.log('hello');
  saybye();
  console.log('hi');
}
function saybye() {
  console.log('byebye');
}
sayhi();
console.log('good bye');