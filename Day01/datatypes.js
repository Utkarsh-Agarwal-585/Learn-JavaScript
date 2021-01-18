/* Data Types in JavaScript */

//string data type
var myName = "Utkarsh Agarwal";
console.log(myName);

// typeof operator
console.log(typeof(myName));

//number datatype
var myAge = 21;
console.log(typeof(myAge));

//boolean datatype
var iAmUtkarsh = true;
console.log(iAmUtkarsh);
console.log(typeof(iAmUtkarsh));

//undefined datatype
console.log(typeof(undef)); // undef has not declared anywhere in the program

console.log(10 + "20");// output = 1020 [concat]
console.log(9 - "5"); // output = 4     [#bug1]
console.log("Java" + "Script");// output = JavaScript
console.log(" " + " "); // output =           [empty]
console.log(" " + 0); // output =   0         [space + 0]
console.log("Utkarsh" - "Agarwal"); //output = NaN    [Not a Number]
console.log(true + false); // output = 1
console.log(true + true);  // output = 2         [true = 1]
console.log(false + true); // output = 1         [false = 0]
console.log(false - true); // output = -1


/* 👨‍💻 Interview Question
      Difference between null vs undefined?  */

var iAmUseless = null; // null is an assigned value. It means nothing.
console.log(iAmUseless); // output = null
console.log(typeof(iAmUseless)); // output = object      [#bug2](null is not an object, it's data type is not object)


var iAmStandBy;//undefined typically means a variable has been declared but not defined yet.
console.log(iAmStandBy); // output = undefined
console.log(typeof(iAmStandBy));//output = undefined


/* 👨‍💻 Interview Question
   What is NaN? */

// NaN is a property of the global object.
// In other words, it is a variable in global scope.
// The initial value of NaN is Not-A-Number

var myPhoneNumber = 9876543210;
var myName = "Utkarsh Agarwal";
console.log(isNaN(myPhoneNumber));//output = false
console.log(isNaN(myName)); // output = true

if(!isNaN(myPhoneNumber)){
    console.log("Please enter valid phone number");
}


console.log(NaN === NaN); // output = false
console.log(Number.NaN === NaN); // output = false
console.log(isNaN(NaN)); // output = true
console.log(isNaN(Number.NaN));// output = true
console.log(Number.NaN); // output = NaN
console.log(Number.isNaN(NaN));//output = true