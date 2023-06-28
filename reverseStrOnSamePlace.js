// your task is to reverse a givne string , on its on place 

// sample input : "Can you reverse me ";
// sample output: naC uoy esrever em ;



const str= "Can you reverse me";
//here we first splitting the string into substring and returning a new array
const arrStr= str.split(' ');
// console.log(arrStr)

//here we use map function and iterate over arrStr and apply reverse and than join it 
const reverseStr= arrStr.map((item)=> item.split('').reverse().join('')).join(' ') ;

console.log(reverseStr)
