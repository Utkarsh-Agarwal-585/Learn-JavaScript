// 1️⃣ Assignment Operator
// An assignment operator assigns a value to its left operand
// based on the value of its right operand 
// The simple assignment opereator is equal (=)

var x = 5;
var y = 5;
console.log(x == y); // true
console.log("Is both the x and y are equal or not" + x == y); //false [becoz it contains + operator]


// 2️⃣ Arithmetic Operator
// An Arithmetic operator takes numerical values
// (either literals or variables) as their operand and
// returns a single numerical value.

console.log(3+3);
console.log(10-5);
console.log(20/5);
console.log(5*6);
console.log("Remainder Operator "+ 27%4); // 3


//➡ Increment  and Decrement Operator 
// Operator x++ or ++x or x-- or --x
//If used postfix, with operator after operand(for ex. x++)
// the increment operator increments and returns the value before incrementing.

var num = 15;
var newNum = num++;
console.log(num);// output = 16
console.log(newNum);// output = 15

// if used prefix, with operator before operand (for ex. ++x)
// the increment operator increments and returns the value after incrementing.

var num = 15;
var newNum = ++num;
console.log(num);// output = 16
console.log(newNum);// output = 16

// 3️⃣ Comparison Operator
// A comparison operator compares its operands and
// returns a logical value based  on whether the comparison is true.

var a = 30;
var b = 10;

//Equal( == )
console.log(a == b);//false

//Not Equal (!=)
console.log(a != b); //true

console.log(a > b);
console.log(a >= b);
console.log(a < b);
console.log(a <= b);

// 4️⃣ Logical Operator
// Logical Operator are typically used with Boolean(logical) values;
// when they are, they return a boolean value.

var a = 30;
var b = -20;
console.log(a > b && b > 0); // false
console.log(a > b && b > 0 && b <0); // false

console.log(a > b || b > 0); // true
console.log(!((a > 0) || (b < 0))); // false


// 5️⃣ String Operator 

console.log("Hello World");
console.log("Hello " + "World");

/* Practice*/
console.log(3**3);// 27  [3*3*3]
console.log(10**-1);//0.1 [1/10]
 
//swap of two numbers
var a = 5;
var b = 10;

a = a + b;
b = a - b;
a = a - b;
console.log(a);//10
console.log(b);//5

// 👨‍💻 Interview Question 
// What is the Difference between == vs === ?

var num1 = 5;
var num2 = '5';
console.log(num1 == num2);//true
console.log(num1 === num2);// false [check the datatype also]
