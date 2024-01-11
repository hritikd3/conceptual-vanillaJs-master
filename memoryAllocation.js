// let a = []
// let b = []

// console.log(a == b);
// console.log(a === b);

//ans will be false bcz here the memory location are being compared which is different in a and b

let a = [];
let b = a;

console.log(a == b);
console.log(a === b);