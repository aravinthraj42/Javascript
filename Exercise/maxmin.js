let numbers = [100,200,13,400,50]

let s = numbers[0]
let l = numbers[0]
function minmax(numbers){

for(let i = 0; i <= numbers.length-1; i++){
  console.log(numbers[i])
  console.log(i)
    if(numbers[i] > l){
    
     l = numbers[i]
     //console.log(l)
    }
    else if (s > numbers[i]){
     s = numbers[i] 
   // console.log(s)
    }
}
// console.log(l ,s)
return l ,s;

}
minmax(numbers)
console.log(`Large: ${l}  small:${s}`)
// console.log(s)
// console.log(l)