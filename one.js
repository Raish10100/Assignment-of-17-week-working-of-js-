/* Write a function called "addNumbers" that takes two numbers as arguments and returns their sum.Call the function before it is declared to demonstrate hoisting.*/

const result = addNumber(2,3);

console.log(result);

function addNumber(a,b){
    return a + b;
}