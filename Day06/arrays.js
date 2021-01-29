// Arrays in JavaScript
// In JS, we have an Array class and array are the prototype of this class.
// In this, it can store multiple datatype values.

var Names = new Array;//optional 
var Names = ['Utkarsh','Agarwal','Taururs', 585];

//1️⃣ Traversal in array

//if we want to get the single data at a time and also if we want to change the data.

var myNames = ['Utkarsh','Agarwal','Taurus'];
console.log(myNames[0]);
console.log(myNames[myNames.length-1]);

//if we want to check the length of elements of an array
console.log(myNames.length);

// we use for loop to navigate
var myFriends = ['sai', 'jay', 'charan', 'shubham'];
for(var i = 0; i <myFriends.length; i++){
    console.log(myFriends[i]);
}

// After ES6 we have for..in and for..of loop too
// for..in loop returns the index
for(let elements in myFriends){
    console.log(elements);// 0 1 2 3
}

// for..of loop return the index values
for(let elements of myFriends){
    console.log(elements);
}

// Array.prototype.forEach()
// calls a function for each element in the array
// cannot use break keyword

myFriends.forEach(function(element, index, array){
console.log(element);
//console.log(element + " index : "+ index + " " + array);
});

// fatarrow function
// can not use "this" keyword
myFriends.forEach((element, index, array) => {
    console.log(element + " index : "+ index + " " + array);
});


//2️⃣Searching and filter in an array
//Array.prototype.indexOf()
//returns the first(least) index of an element within the array equal to an element.
var fruits = ['apple','banana','mango', 'kiwi','banana'];
console.log(fruits.indexOf('mango',1));// 2 (search mango from index starts with 1)
console.log(fruits.indexOf('banana'));//1

console.log(fruits.indexOf('papaya'));//-1 (papaya is not found in the array)


//Arrays.prototype.lastIndexOf()
//returns the last(greatest) index of an element within the array equal to an element
var objects = ['chair','table', 'fan','tv','table'];
console.log(objects.lastIndexOf("table"));//4
console.log(objects.lastIndexOf("table",3));//1


// Array.prototype.includes()
//determine whether the array contains the value,
//returning true or false as approriate

var cars = ['maruti','tata','scoda','audi', 'kia','MG','Jeep','tatasafari'];
console.log(cars.includes('kia'));//true
console.log(cars.includes('tata',6));//false


//Array.prototype.find()
//arr.find(callback(element[, index[, array]])[, thisArg])

//returns the found element in the array, if some element in the array satifies the testing the testing function
// or undefined if not found
// only problem is that it return only one element.

const prices = [200,300,450,500,600];

//price > 400
const findElem = prices.find((currVal) => {
    return currVal > 400;
});

console.log(findElem);//450 (not all element return)
console.log( prices.find((currVal) => currVal < 400));//200


// Array.prototype.FindIndex()
//return the found index in the array. if an element in the array satisfies the testing function, or -1 if not found

console.log( prices.findIndex((currVal) => currVal < 400));// 0 (index return)
console.log( prices.find((currVal) => currVal > 1400)); // undefined 
console.log( prices.findIndex((currVal) => currVal > 1400)); // -1



// Array.prototype.filter()
// Returns a new array containing all elements of the calling array for which the provided filtering function returns true.

// prices < 400

const newPriceTag = prices.filter((elem, index) => {
return elem < 400;
});
console.log(newPriceTag);// [200, 300]
// if the element is no found then it return an empty array




//3️⃣how to sort an array

//Array.prototype.sort()
// Works in case of string only not numbers

const months = ['Jan', 'Feb','March','Dec', 'June', 'Nov'];
console.log(months.sort());// ['Dec', 'Feb','Jan', 'June', 'March', 'Nov' ]

const array1 = [1, 30, 4, 21, 10000, 99];
console.log(array1.sort());// [ 1, 10000, 21, 30, 4, 99 ]
//However, if numbers are sorted as strings
//'25' is bigger than "100" because "2" is bigger than "1"
