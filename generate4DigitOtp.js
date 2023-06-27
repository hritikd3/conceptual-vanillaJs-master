// your task is to generate a 4 digit otp 

const otp= Math.random(); //it will give us random decimal number
// console.log(otp)

// const sortOtp= Math.round(otp*10000); //this is good way but sometime it can provide us 3 or 2 digit number also


//making it more efficient
const sortOtp= Math.round(otp*9000 +1000); 

console.log(sortOtp)

