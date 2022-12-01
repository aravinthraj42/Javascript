// C-1.10 
// Write a pseudo description of the function that reverses list of n integers 
// so that the numbers listed in opposite order than they were before and 
// compare thid method to equaivalent javascript function for do same thing

//Pseudo Code
// 1 2  8 10 13 15 ===> 15 13 10 8 2 1
// Get List of numbers as Input
//swaping
// store the Last number in first and temp in last
//splice - inbult function
//reverse - inbuilt function

//------------------Soultion1------------------------------------------------------------------
const promp = require('prompt-sync')();
let number = promp('Enter a list of numbers: ');

let numb = number.split(' ')

function reversed_list(numb){
let start = 0;
let end = numb.length-1

while(start< end){
    let temp = numb[start]
    numb[start] = numb[end]
    numb[end] = temp
    start = start + 1
    end = end -1
}
return numb
}
//num = [1, 2, 3, 4, 5, 6,7]
console.log(reversed_list(numb))

//========================Solution 2------------------------------
let lst = [1,2,3,4,5]
const prompt = require('prompt-sync')();
let numbers = prompt('Enter a list of numbers: ');
let num = numbers.split(" ")
let l = [];
for (i of num){
    l.splice(0,0,i)
}
console.log(l)

// -----------------Solution 3---------------------
const prompt1 = require('prompt-sync')();
let lst1 = prompt1('Enter list of numbers')
let num1 =lst1.split(' ')
let reversed = num1.reverse() 
console.log(reversed)

//// let lst = [1,2,3,4,5]
//lst.reverse()
///console.log(lst)

//-------------------------------------------------------------------------------------------------------------------------

// Suggested Problems To Solve
// Write a program to reverse digits of a number
// Program to reverse a string
// Program to reverse words in a given string.
// Program to reverse the rows in a 2d Array
// Program to Reverse Bits of a Number