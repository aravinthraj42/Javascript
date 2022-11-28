const prompt = require('prompt-sync')();

let num1 = prompt('Enter a number1: ');
let num2 = prompt('Enter a number2: ');

while (num2 != 0){
var t = num2
num2 = num1 % num2
num1 = t

}
console.log(t)
console.log(num1,num2)
