const prompt = require("prompt-sync")();

let number = prompt('Enter a list of numbers separated by space: ')
let num = number.split(' ')
console.log(num)
let sum = 0
for(let n of num){
    try{
        let intnum = parseInt(n)
        console.log(intnum)
        sum = sum + intnum  
    }
    catch(e) {
        console.log(`Entered Values could be Converted to interger . NOT Valid !!! ${n}`)
    }
    
}
console.log(`Sum of the Valida integr numbers: ${sum}`)

