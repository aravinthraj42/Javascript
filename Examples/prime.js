const prompt = require('prompt-sync')();

const num = prompt('Enter a number: ');

let prime = true 
if(num > 1){
 for(let i =2; i< num; i++){
    if(num%i == 0){
        console.log(i , 'divides', num)
        prime = false
        break
    }
 }
 if(prime) console.log('The Number', num, 'is prime')
 else console.log('The Number', num, 'is NOT prime')
}
// let prime = true;
// let x = Math.sqrt(num)
// console.log(x)
// while(x > 1){
//     console.log((Math.floor(num % x)) == 0)
//     if((Math.floor(num % x) == 0)){
//         console.log(x , 'divides', num)
//         prime = false
//         break
//     }
//     else x-= 1
// }
// if(prime) console.log('The Number', num, 'is prime')
// else console.log('The Number', num, 'is NOT prime')
