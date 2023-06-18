var c = [1, 2, 3, 4];
function d(c) {
  c.push(3);
  c.push(3);
  c.push(3);
  console.log("inside funct", c);
}
d(c);
console.log("outside funct", c);
