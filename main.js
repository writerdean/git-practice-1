function add(num1, num2) {
  return num1 + num2;
};
console.log(add(35, 42))

function multiply(num1, num2) {
  return num1 * num2;
}

multiply(2, 3)

function combine(fn1, fn2) {
  return fn1 / fn2
}

// console.log(add(35, 42), multiply(2, 3))

console.log(combine(add(35, 42), multiply(2, 3)))