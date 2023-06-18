// remember this :-
//primitive datatypes are passed by value
 //array and object are passed by reference

var a = 10;
function b(a) {
  a = 30;
  console.log("inside function", a); //30//pass by value
}
b(a);

console.log("outside function", a); //10
