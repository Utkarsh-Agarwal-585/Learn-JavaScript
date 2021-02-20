// 👉 Date and Time in JavaScript

// JS Date objects represent a single moment in time in a platform-independent format.
// Date objects contain a number that represents milliseconds since 1 January 1970 UTC.

//👉 Creating Date Objects
// 4 ways to create a new date object:

//new Date()
//new Date(year, month, day, hours, minutes, seconds, milliseconds)
// it takes total 7 arguments
//new Date(milliseconds)
// we cannot avoid month section
//new Date(date string)


//1️⃣ new Date()
// Date objects are created with the new Date() constructor.

let currDate = new Date();
console.log(currDate); // 2021-02-20T11:30:07.079Z
// India is 5 hours and 30 minutes ahead of Greenwich Time and if we add 5hr30min, we get our Indian Time.

console.log(new Date()); // 2021-02-20T11:31:59.082Z

console.log(new Date().toLocaleDateString()); // 20/2/2021

console.log(new Date().toString()); // Sat Feb 20 2021 17:04:10 GMT+0530 (India Standard Time)


//2️⃣ Date.now()
// Returns the numeric value corresponding to the current time-the number of milliseconds elapsed since January 1, 1970 00:00:00 UTC

console.log(Date.now()); // 1613820960011

// 3️⃣ new Date(year, month, ...)
// 7 numbers specify year, month, day, hour, minute, second and milliseconds (in that order)

//Note: JS counts month from 0 to 11

//January is 0. Decemnber is 11

var d = new Date(2021, 0, 5, 10, 33, 30, 0);
console.log(d); //2021-01-05T05:03:30.000ZZ
console.log(d.toLocaleDateString());// 5/1/2021

var d1 = new Date(2021,0,5);
console.log(d.toLocaleString()); //5/1/2021, 10:33:30 am
// Atleast give 2 arguments upto month then you will give correct ans.


//4️⃣ new Date(dateString)
//newDate(dateString) creates a new date object from a date string

var d2 = new Date("October 13, 2021 11:13:00");
console.log(d2); // 2021-10-13T05:43:00.000Z
console.log(d2.toLocaleString()); // 13/10/2021, 11:13:00 am

//5️⃣ new Date(milliseconds)
// new Date(milliseconds) creates a new date object as zero time milliseconds

var d3 = new Date(0); 
var d4 = new Date(1613821532267);
var d5 = new Date(86400000*2);
console.log(d3.toLocaleString()); //1/1/1970, 5:30:00 am
console.log(d4.toLocaleString()); //20/2/2021, 5:15:32 pm
console.log(d5.toLocaleString()); // 3/1/1970, 5:30:00 am

//👉 Dates Methods

const curDate = new Date();

// how to get the individual date
console.log(curDate.toLocaleString());//20/2/2021, 5:23:44 pm
console.log(curDate.getFullYear());// 2021
console.log(curDate.getMonth());// 1
console.log(curDate.getDate());// 20 
console.log(curDate.getDay());// 6

// how to set the individual date
console.log(curDate.setFullYear(2022,10,5)); //1667649422807
console.log(curDate.setMonth(10));// 1667649422807
console.log(curDate.setDate(5));// 1667649422807
console.log(curDate.toLocaleString()); // 5/11/2022, 5:27:02 pm

//---------------------------------------------------------------------------------------



// 👉 Times Method
 
const curTime = new Date();

// how to get the individual Time
console.log(curTime.getTime()); //1613822439725
console.log(curTime.getHours());// 17
console.log(curTime.getMinutes()); // 30
console.log(curTime.getSeconds()); // 39 
console.log(curTime.getMilliseconds());// 725

// how to set the individual time

let curTime1 = new Date();
//console.log(curTime1.setTime());
console.log(curTime1.setHours(5)); // 1613779515885
console.log(curTime1.setMinutes(5));// 1613777715885
console.log(curTime1.setSeconds(5));// 1613777705885
console.log(curTime1.setMilliseconds(5)); // 1613777705005

