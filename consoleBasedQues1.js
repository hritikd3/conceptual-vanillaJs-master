// for arrays it worked as pass by refrence .
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 18];
console.log(arr.slice(1, 7)); //[ 2, 3, 4, 5, 6, 7 ]
console.log(arr.splice(1, 7)); //[  2, 3, 4, 5,  6, 7, 8]
console.log(arr.slice(1, 7))   //[9,18]
