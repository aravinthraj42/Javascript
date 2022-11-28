const prompt = require('prompt-sync')();

let text = prompt('Enter a Sentence: ')

word = text.split(' ')
//console.log(word);
let count = 0
for(let w  in  word){
   count += 1
}
console.log(`Number of words in the entereed text is :${count}`)
let char = word.sort()
console.log('The words in sorted are:')
for(let w of char){
    console.log(w)
}