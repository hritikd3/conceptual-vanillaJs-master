function counter() {
  var count = 0;
  function incrCount() {
    count++;
  }
}
console.log(count);
// error because we have hided our data (that is count inside a function) and no one can acccess it outside the function
