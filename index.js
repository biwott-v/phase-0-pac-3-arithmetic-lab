function add(a, b) {
  return a + b;
}
function subtract(a, b) {
  return a - b;
}
function multiply(a, b) {
  return a * b;
}
function divide(a, b) {
  return a / b;
}
function increment(a) {
  return (a += 1);
}
function decrement(a) {
  return (a -= 1);
}
function makeInt(n) {
  if (n===isNaN){
    return n;
  }
  return parseInt(n,10);
}
function preserveDecimal(n){
  if (n===isNaN){
    return n;
  }
  return parseFloat(n);
} 
