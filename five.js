/* Declare a variable using let inside a block scope and attempt to log its value to the console before it is assigned a
value to demonstrate the temporal dead zone.*/

{
    console.log(letVariable); // ReferenceError 
  
    
    let letVariable = 'I am inside the TDZ';  
    console.log(letVariable);  //output came
  }
  
   
  console.log(letVariable); // ReferenceError 
  