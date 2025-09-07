const add = function(firstNumber, secondNumber) {
    const a = parseInt(firstNumber);
    const b = parseInt(secondNumber);
    return a+b;
};

const subtract = function(firstNumber, secondNumber) {
    const a = parseInt(firstNumber);
    const b = parseInt(secondNumber);
    return a - b;
};

const sum = function(array) {
    let n = array.length;
    let sum = 0;
    for (i = 0; i < n; i++) {
      sum += array[i];
    }
    return sum;
};

const multiply = function(array) {
    let n = array.length;
    let product = 1;
    for (i = 0; i < n; i++) {
      product *= array[i];
    }
    return product;
};

const power = function(firstNumber, secondNumber) {
    const a = parseInt(firstNumber);
    const b = parseInt(secondNumber);
    return a ** b;
};

const factorial = function(n) {
    let product = 1
    for (i = 1; i < n+1; i++) {
      product *= i;
    }
    return product;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
