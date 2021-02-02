// 4️⃣ Perform CRUD 

// Array.prototype.push()
//The push() method adds one or more elements to the end of an array 
//and returns the new length of the array.

const animals = ['pigs','goats','sheep'];

const count = animals.push('cow');
console.log(animals);// [ 'pigs', 'goats', 'sheep', 'cow' ]
console.log(count);// 4

animals.push('cats','chicken');
console.log(animals); // [ 'pigs', 'goats', 'sheep', 'cow', 'cats', 'chicken' ]


//Array.prototype.unshift()
// The unshift() method adds one or more elements to the beginning of an array 
// and returns the new length of the array.

animals.unshift('horse');
console.log(animals);
animals.unshift('rabbit', 'dog');
console.log(animals);

//2nd example

const myNumbers = [1,2,3,5];
myNumbers.unshift(4,6);
console.log(myNumbers); //[ 4, 6, 1, 2, 3, 5 ]



//Array.prototype.pop()
//The pop() method removes the last element from an array and returns that element. This method changes the length of the array.

const plants = ['broccoli','cauliflower','kale','tomato','cabbage'];

console.log(plants);// [ 'broccoli', 'cauliflower', 'kale', 'tomato', 'cabbage' ]
console.log(plants.pop());// cabbage
console.log(plants);//[ 'broccoli', 'cauliflower', 'kale', 'tomato' ]



// Array.prototype.shift()
// The shift() method removes the  first element from an array and returns that removed element.
// This method changes the length of that array.

const colors = ['black','white','green','blue','red','violet'];

console.log(colors);// [ 'black', 'white', 'green', 'blue', 'red', 'violet' ]
console.log(colors.shift());// black
console.log(colors);// [ 'white', 'green', 'blue', 'red', 'violet' ]


// 👨‍💻 practice

// Array.prototype.splice()
// Adds and/or removes elements from an array.

const months = ['Jan','march','April', 'June', 'July'];

//1. Add Dec at the end of an array

const newMonth = months.splice(months.length, 0, "Dec");// splice(start: number, deleteCount?: number): string[]
// const newMonth = months.splice(5, 0, "Dec");// This is also corect
console.log(months);// [ 'Jan', 'march', 'April', 'June', 'July', 'Dec' ]


//2. What is the return value of splice method?

console.log(newMonth); // [] (empty array because we didn't deleted any element by using splice() method)

// 3. update march to March (update).

// one way
//const updateMonth = months.splice(1, 1, 'March');

//another way
const indexOfMonth = months.indexOf('march');
if(indexOfMonth != -1){
    const updateMonth = months.splice(indexOfMonth, 1, 'March');
    console.log(updateMonth);//['march']
}
else{
    console.log("No such element found");
  
}
console.log(months);// [ 'Jan', 'March', 'April', 'June', 'July', 'Dec' ]


//4. Delete June from an array

const indexOfMon = months.indexOf('June');
if(indexOfMon != -1){
    const updateMonths = months.splice(indexOfMon, 1);
}
else{
    console.log("No such element found");
  
}
console.log(months);// [ 'Jan', 'March', 'April', 'July', 'Dec' ]



//5. Delete all elements from April
const indexOfMonths = months.indexOf('April');
if(indexOfMonths != -1){
    const updateMonths = months.splice(indexOfMonths, Infinity);
    console.log(updateMonths);// [ 'April', 'June', 'July', 'Dec' ]
}
else{
    console.log("No such element found");
  
}
console.log(months); // [ 'Jan', 'March' ]





//5️⃣ Map and Reduce Method

//Array.prototype.map()
//let newArray = arr.map(callBack(currentValue[, index[, array]])
// return element for newArray, after executing something 
// }[, thisArg]);
// returns a new array containing the results of calling a function on every element in this array.

const array1 = [1,4,9,16,25];

//num > 9
// map() method is chainable it means we can attach multiple with it.

let newArr = array1.map((currElem, index, arr) => {
    return currElem > 9;
})//here attach as many method like }).reduce().filter() and so on...
console.log(array1); // [ 1, 4, 9, 16, 25 ]
console.log(newArr); // [ false, false, false, true, true ]

// Another way
let newArry = array1.map((curElm, index, arr) => {
    return `Index no = ${index} and the value is ${curElm}  belong to ${arr}`
})
console.log(newArry);

/*  'Index no = 0 and the value is 1  belong to 1,4,9,16,25',
  'Index no = 1 and the value is 4  belong to 1,4,9,16,25',
  'Index no = 2 and the value is 9  belong to 1,4,9,16,25',
  'Index no = 3 and the value is 16  belong to 1,4,9,16,25',
  'Index no = 4 and the value is 25  belong to 1,4,9,16,25'
  */

  // It return new array without mutating the original array


  let newArryfor = array1.forEach((curElm, index, arr) => {
    return `Index no = ${index} and the value is ${curElm}  belong to ${arr}`
})
console.log(newArryfor);// undefined 
// foreach return the undefined array



//Practice 👩‍💻

//1. Find the square root of each element in an array
let arr = [25, 36, 49, 64, 81];

let arrSqr = arr.map((currElemt) => {
    return Math.sqrt(currElemt);
})
console.log(arrSqr); // [ 5, 6, 7, 8, 9 ]

//2. Multiply each element by 2 and return only those elements which are greater than 10

let arr1 = [2, 3, 4, 6, 8];
let arr2 = arr1.map((curEle) => {
    return curEle * 2;
}).filter((curEle) => {
    return curEle > 10;

})
console.log(arr2);//[ 12, 16 ]




// Reduce Method
// Flatten an array to convert the 3d or 2d array into a single dimensional array
// the reduce function takes four arguments:
//Accumulator
//Current value
//current Index
//Source Array
//The reduce() executes a reducer function on each element of the array, resulting in single output values.

let ar = [5,6,2];
let sum = ar.reduce((accumulator, currElm) => {
    return accumulator += currElm;
})
console.log(sum);//13


//or


let ar1 = [2, 3, 4, 6, 8];
let ar2 = ar1.map((curElmt) => curElmt * 2).filter((curElmt) => curElmt > 10).reduce((accumulator, curElmt) => {
return accumulator += curElmt;
})
console.log(ar2);//28

// How to flatten an array
//converting 2d and 3d array into one dimensional array

const arry = [
    ['zone_1', 'zone_2'],
    ['zone_3', 'zone_4'],
    ['zone_5', 'zone_6'],
    ['zone_7', 'zone_8']
];

let flatArr = arry.reduce((accum, currVal) => {
    return accum.concat(currVal);
})

console.log(flatArr);

/*
[
  'zone_1', 'zone_2',
  'zone_3', 'zone_4',
  'zone_5', 'zone_6',
  'zone_7', 'zone_8'
]
*/