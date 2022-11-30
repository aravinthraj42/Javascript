const prompt = require('prompt-sync')();
let number = prompt('Enter a number: ')

let positive = () =>{
    let sum = 0
    if(number > 0){
    for(let i = 1; i < number; i++){
         let small = i * i
         sum = sum + small
         //console.log(small)
    } 
    return sum
    //console.log(sum)
    // let square = number * number
    // return square
    // return small
} else console.log('Number cannot be negative')
}
console.log(`Summ of Square of all even positive integers smaller than  given number is ${positive()}`)