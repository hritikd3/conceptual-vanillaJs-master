function outer() {
  let a = 10;
  // b is forming closure with its lexical env that is function outer;
  function inner(b) {
    console.log(a, b);
  }
  return inner;
}
// outer()();   this is like how we calling inner and outer function 
// another way 
// const newInner= outer()
// newInner("hey");

outer()("hesllo");
