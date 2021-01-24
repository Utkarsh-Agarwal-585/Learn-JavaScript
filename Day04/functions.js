//1️⃣ functions in javascript

 function sum(){
    var a=10;
    var b = 20;
    var total = a+b;     
    console.log(total);
 }
 //2️⃣ calling function
sum();

//3️⃣function parameter vs function arguments
// function parameters are names listed in the functions definition
// function arguments are the real value passed to the function.

function sum(a, b){
    var total = a+b;     
    console.log(total);
 }
 sum(50,60);

 //4️⃣ funcion expressions
 //It means create a function and put it into the variable
 function sum(a, b){
   var total = a+b;     
   console.log(total);
}
var funexp = sum(50,50);

// 5️⃣ Return Keyword
// when JS reaches a return statement, the function will stop executing.
// functions often compute a return value.
// the return value is "returned" back to the "caller"

function sum(a, b){
   return total = a+b;  
}
var funcexp = sum(50,40);
console.log(funcexp);

// 6️⃣ Annonymous function
// A function exp is similar to and has the same syntax as a function declaration
// one can define "named" function exp or "anonymous"function expressions.

var funcexp = function(a, b){
   return total = a+b;  
}

console.log(funcexp(5,15));