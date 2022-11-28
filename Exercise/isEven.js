const prompt = require('prompt-sync')();

let num = prompt('Enter a Number: ');

let is_Even = (num) =>{
   return ( num & 1 ) // ======> bitwise Operator  https://www.calculator.net/binary-calculator.html
}

is_Even() == 0 ? console.log(true) : console.log(false)