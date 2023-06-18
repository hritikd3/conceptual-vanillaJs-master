//your task is to convert given array into a object 

const arr= [2,4,6];
let obj= arr.reduce(
    //accumulator, iterator, index
    (acc,iter,i)=> ({...acc,[i]: iter}), {} //here at the end {} we used it to pass the accumulator value in empty object
)
console.log(obj)


// efficient method
 objRun= {...arr}
console.log(objRun)

