/* 👉 Math Object in JS  */

//1️⃣PI
console.log(Math.PI); //3.141592653589793

//2️⃣ Math.round()
//returns the value of x rounded to its nearest integer

let num = 10.2565;
console.log(Math.round(num)); //10
console.log(Math.round(10.5665));//11

//3️⃣ Math.pow()
//Math.pow(x,y) returns the value of x to the power of y

console.log(Math.pow(2,3));//8
console.log(2**3); //8

//4️⃣Math.sqrt()
//returns the square root of a number.

console.log(Math.sqrt(25));// 5
console.log(Math.sqrt(66));// 8.12403840463596

// 5️⃣ Math.abs()
// returns the absolute (positive) value of a number.

console.log(Math.abs(-5)); // 5
console.log(Math.abs(-55.5));// 55.5
console.log(Math.abs(4-6)); // 2

// 6️⃣ Math.ceil()
// returns the value of a number rounded up to its nearest integer

console.log(Math.ceil(4.4));//5
console.log(Math.ceil(99.1));//100

//7️⃣ Math.floor()
// returns the value of a number down to its nearest integer

console.log(Math.floor(4.4));// 4
console.log(Math.floor(99.1));// 99

//8️⃣ Math.min()
console.log(Math.min(0,150,30,20,-8,-200));// -200

//9️⃣ Math.max()
console.log(Math.max(0,150,30,20,-8,-200));// 150

//🔟 Math.round()
//returns a random number between 0 (inclusive) and 1 (exclusive)

console.log(Math.random()); // 0.4247679210133397
console.log(Math.floor(Math.random()*10));//1     [0 to 9]
console.log(Math.floor(Math.random()*10)); //0
console.log(Math.floor(Math.random()*10)); //6

// 1️⃣1️⃣ Math.trunc()
// returns the integer part of a number (means it returns the integer before the decimal)

console.log(Math.trunc(4.6)); // 4
console.log(Math.trunc(-99.1));// -99

// 👨‍💻 Practice Time
//If the argument is a positive number, Math.trunc() is equivalent to Math.floor(), otherwise is equivalent to Math.ceil().