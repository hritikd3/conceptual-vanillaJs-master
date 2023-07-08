

console.log("3" - 3); //0

// this is bcz here in first console it checks 3 is string and js compiler thought you wrote in bymistake so at the backend it convert it into number than do 3-3=0
console.log("abc" - 3); //
// but in second console when it convert abc into number abc-3 which result in NAN i.e, not a number

console.log(3 + +"3"); //6
// it is 6 because in middle their is +'3'   which treast as number and do sum  example typeof  +'3'  is number

typeof null; //object
//  This behavior is considered a historical bug in JavaScript, as null is actually a primitive value and not an object. However, for backward compatibility reasons, the typeof operator incorrectly identifies null as an object.

// ***********************************
console.log("23" > "2"); //true
// When comparing strings, the comparison is made character by character from left to right. In this case, the first characters being compared are "2" and "2". Since they are equal, the comparison moves on to the next character. The second characters being compared are "3" and "2". Since "3" comes after "2" in lexicographical order, the comparison evaluates to true.

console.log("23" > "3"); //false
// In lexicographical order, when comparing strings character by character, the comparison stops as soon as a difference is found. In this case, when comparing "2" and "3", "2" comes before "3" in lexicographical order. Therefore, the comparison stops at this point, and the result is false.

(function () {
  var x, y;
  try {
    throw new Error();
  } catch (x) {
    x = 1;
    y = 2;
    console.log(x);
  }
  console.log(x);
  console.log(y);
})();
