var num1, num2;
num1 = parseInt(Math.random() * 100);
num2 = Math.random() * 100;

console.log('Num1: ', num1);
console.log('Num2: ', num2);
console.log('answer', adding(num1, num2));

function adding(num1, num2) {
  var answer = num1 + num2;
  return num1 + num2;
}
