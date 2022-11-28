const prompt = require('prompt-sync')();

function isMultiple(n,m){
    if(n%m == 0) return true
    else if(n % m != 0) return false
}

let num1 = prompt('Enter a Number 1: ')
let num2 = prompt('Enter a Number 2: ')

console.log(isMultiple(num1,num2));
