/*Declare three variables,one using let,one using var,and one using const,all inside a block scope.Assign them values and log
their values to the console before and after they are declared to demonstrate variable hoisting. */

{
  console.log(varVariable); //undefined
  console.log(letVariable); //undefined
  console.log(constVariable); //cannot access before initialization

  var varVariable = "I am a var";
  let letVariable = "I am a let";
  const constVariable = "I am a const";

  console.log(varVariable);
  console.log(letVariable);
  console.log(constVariable);
}

console.log(varVariable); //output is comming
console.log(letVariable); //ReferenceError
console.log(constVariable); //ReferenceError
