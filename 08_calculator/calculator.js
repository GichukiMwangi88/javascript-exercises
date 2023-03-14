const add = function (a, b) {
  //function that adds numbers
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (arr) {
  //check if the array is empty
  if (arr.length === 0) {
    return 0;
  }

  //initialize total to zero

  let total = 0;

  arr.forEach(function (item) {
    total += item;
  })

  return total;

};

const multiply = function (arr) {
  //initialize result variable to 1.
  let result = 1
  arr.forEach(function (item) {
    result *= item;
  })

  return result;

};

const power = function (a, b) {
  return Math.pow(a, b);

};

const factorial = function (num) {
  //Create a variable result to store num
  let result = num;

  //if num = 0 or num = 1, the factorial will return 1
  if (num === 0 || num === 1) {
    return 1;
  };

  //Create while loop
  while (num > 1) {
    num--; //decrease num by 1 after each iteration
    result = result * num
  }

  return result;

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
