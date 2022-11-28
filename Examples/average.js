 const prompt = require('prompt-sync')();
 let n = prompt('Enter a Number: ')

 function Average(n){
     let sum = 0
    for(let i =1;  i<=n; i++){
      sum = sum + i // 0+1=1,1+2=3,3+3,6+4,10+5,
    }
      avg = parseFloat(sum/n)
      console.log(sum)
    
    return avg
}
console.log('Average of ',n, 'is', Average(n))

