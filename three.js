/* Write a function that takes two numbers as arguments and returns their sum.Declare a variable inside the function using the var keyword and log
its value to the console before it is assigned a value to demonstrate variable hoisting.*/

function twoNumbers(a,b){
    var result = a + b;
    console.log(result);
    return result
}

const sum  = twoNumbers(5,10);
console.log(sum);