const prompt = require('prompt-sync')();
let text = prompt('Enter a text: ')
// let word = text.splwordst('')
//const vowels = ["a","e","i","o","u"]
let countVowels = (str)=>{
    // let count = 0
    const count = str.match(/[aeiou]/gi).length;
    // for(let letter of str.toLowerCase()){
    //     if (vowels.includes(letter)) {
    //         count++;  
    //    }
    // }
    return count
    

}
console.log(text, countVowels(text))


///  const count = str.match(/[aeiou]/gi).length;