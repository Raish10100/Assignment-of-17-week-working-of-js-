/* Write a function called "addNumbers" that takes two numbers as arguments and returns their product.Use function expressions to 
define the function and call the function before it is declared to demonstrate hoisting. */

const addNumber = function (a, b) {
  return a * b;
};

const result = addNumber(4, 8);

console.log(result);
