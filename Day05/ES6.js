// Modern JavaScript
// Features of ECMAScript 2015 also known as ES6

// 1️⃣ LET vs CONST vs VAR

var myName = "Utkarsh";
console.log(myName);

myName = "Utkarsh Agarwal";
console.log(myName);


let Name = "Utkarsh";
console.log(Name);

Name = "Utkarsh Agarwal";
console.log(Name);


const mName = "Utkarsh";
console.log(mName);

//mName = "Utkarsh Agarwal";// throws error
//console.log(mName);// not excecuted

// var => function scope

function biodata(){
    var myFirstName = "Utkarsh";
    console.log(myFirstName);// Utkarsh

    if(true){
        var myLastName = "Agarwal";
        console.log('inner ' + myFirstName);// inner Utkarsh 
        console.log('inner ' + myLastName);//inner Agarwal
    }
    console.log('innerouter ' + myLastName);//innerouter Agarwal
}

biodata();

// let and const => Block Scope
// throw error because myLastName is declared as let which is up to block scope
/*function biodata(){
    let myFirstName = "Utkarsh";
    console.log(myFirstName);// Utkarsh

    if(true){
        let myLastName = "Agarwal";
        console.log('inner ' + myFirstName);// inner Utkarsh 
        console.log('inner ' + myLastName);//inner Agarwal
    }
    console.log('innerouter ' + myLastName);//innerouter Agarwal
}
*/

// 2️⃣ Template Literals (Template Strings)
// JS pgm to print table for given number(8).

for(let num = 1; num <= 10; num++){
    let tableOf = 8;
    //console.log(tableOf + " * " + num + " = " +tableOf * num);
    console.log(`  ${tableOf} * ${num} = ${tableOf * num}`  );

}

//3️⃣ Default Parameters
// Default function parameters allow named parameters to be intitalized with default 
// values if no value or undefined is passed.


function mult(a,b = 5){
    return a*b;
}
console.log(mult(5));


// 4️⃣ Fat Arrow Function
// Normal way to writing function
// console.log(sum());
// function sum()1{
    //let a =5; b= 6;
    //let sum = a+b;
  //  return `the sum of the two number is ${sum}`;
//}
 
// How to convert it into Fat Arrow Function
 const sum = () => {
    let a =5; b= 6;
    let sum = a+b;
   return `the sum of the two number is ${sum}`;
 }
 console.log(sum());// Always call the function after define the function.

 // Another way
 const mul = () => {
    let a =5; b= 6;
   return `the mul of the two number is ${a*b}`;
 }
 console.log(mul());

// Another way
const div = () => {
   return `the div of the two number is ${(a=6)/(b=6)}`;
 }
 console.log(div());
  
 // Another way
 const mod = () =>  `the mod of the two number is ${(a=6)%(b=6)}`;
  console.log(mod());

  