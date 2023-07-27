function outer() {
  let a = 10;
  // b is forming closure with its lexical env that is function outer;
  function inner(b) {
    console.log(a, b);
  }
  return inner;
}

outer()("hello");
