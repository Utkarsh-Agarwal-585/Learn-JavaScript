/* 👉 Strings in JavaScript */

// String can be created as primitives, from string literals,or as obejects, using the String() constructor

let myName = "Utkarsh Agarwal";
let myChannelName = 'Taurus Utkarsh';

let yName = new String("Easy Notes Hub");// using the constructor

console.log(myName); // Utkarsh Agarwal
console.log(myChannelName);//Taurus Utkarsh
console.log(yName);// [String: 'Easy Notes Hub']


// 1️⃣ Find the length of the String
// String.prototype.length

console.log(myName.length); //15


//👉 Escape Character

let anySentence = "We are the so-called \"Vikings\" from the north.";
console.log(anySentence);  //We are the so-called "Vikings" from the north.

//  (OR)

let Sentence = 'We are the so-called "Vikings" from the north.' ;
console.log(Sentence); // We are the so-called "Vikings" from the north.

//  (OR)

let Sentenc = "We are the so-called 'Vikings' from the north." ;
console.log(Sentenc);// We are the so-called 'Vikings' from the north.


// 2️⃣ Finding a String in a String

//String.prototype.indexOf(searchValue [, fromIndex])

const myBioData = "I am Utkarsh Agarwal";

console.log(myBioData.indexOf("utkarsh"));// -1
console.log(myBioData.indexOf("Utkarsh"));// 5
console.log(myBioData.indexOf("a", 8)); // 8
console.log(myBioData.indexOf("a", 9)) // 15

// 3️⃣ Searching a String in a String
// String.prototype.search(regexp)
// search() method searches a string for a specified value and returns the position of the match

const myBio = "I am the Utkarsh";

let sData = myBio.search("Utkarsh");
console.log(sData); // 9


//👉 Extracting String Parts
// 3 methods:
// slice(start, end)
//substring(start, end)
// substr(start, length)

//4️⃣ slice() method
// slice extract a part of a string and returns the extracted part in a new string.
//The method takes 2 parameters, the start pos and
// the end position (end not included)

var str = "Apple, Banana, Kiwi";

let res = str.slice(0,4);
console.log(res); // Appl

res = str.slice(7 ,-2);
console.log(res); // Banana, Ki

res = str.slice(7);
console.log(res); // Banana, Kiwi

// 👨‍💻 Practice

// Display only 280 characters of a string like the one used in Twitter

let myTweets = "Donec lacinia non libero id imperdiet. Sed non hendrerit elit. Vestibulum at lectus tempor, eleifend nibh non, auctor magna. Vestibulum pharetra diam tempus enim molestie, sed venenatis tortor elementum. In laoreet faucibus hendrerit. Donec sollicitudin, augue nec sollicitudin eleifend, arcu mauris malesuada dolor, in gravida massa ipsum et risus. Donec ligula velit, sagittis nec ultrices eu, ullamcorper at est. Ut at condimentum elit. Integer consequat ligula ligula, dignissim consectetur mi condimentum quis. Donec sed massa in turpis pretium laoreet. Fusce tincidunt augue magna, eget ultricies velit finibus nec. Pellentesque neque orci, vestibulum a tellus a, auctor accumsan dolor. Fusce eleifend lectus quis turpis finibus, sed auctor orci ultrices. Proin sed sem eu est mattis finibus.";

let myActualTweet = myTweets.slice(0,280);//0-279
console.log(myActualTweet);
console.log(myActualTweet.length); // 280


//5️⃣ substring() method
// substring() is similar to slice().
// The difference is that substring() cannot accept negative indexes.

var str1 =  "Apple, Banana, Kiwi";
let res1 = str1.substring(0, 4);
console.log(res1); // Appl

// If we give the negative value then the characters are counted from the 0th position
res1 = str1.substring(8, -2);
console.log(res1); // Apple, B

//6️⃣ The substr() method
// substr() is similar to slice()

//The difference is that the second parameters specifies the length of the extracted part.

var str2 = "Apple, Banana, Kiwi";
let res2 = str2.substr(0,4);
console.log(res2); //Appl

res2 = str2.substr(7,-2);
console.log(res2);//    [blank]

res2 = str2.substr(-4);
console.log(res2); // Kiwi


//👉 Replacing String Content()
// 7️⃣ String.prototype.replace(searchFor, replaceWith)

// The replace() method replaces a specified value with another value in a string.

let mybioData = 'I am utkarsh Agarwal utkarsh';

let replaceData = mybioData.replace('utkarsh', 'Utkarsh');
//It do not replace last utkarsh with Utkarsh
console.log(replaceData); // I am Utkarsh Agarwal utkarsh

/* Points to Remember:
1: The replace() method does not change the string it is called on. It returns a new String.
2: By default, the replace() method replaces only the first match.
3: By default, the replace() method is case sensitive. Writing UTKARSH (with upper-case) will not work.

*/

//👉 Extracting String Characters
// 3 methods:
// charAt(position)
// charCodeAt(position)
// Property access [ ]

// 7️⃣ charAt() method
// It returns the characters at a specified index(position) in a string

let st = "HELLO WORLD";
console.log(st.charAt(0));// H

// 8️⃣ charCodeAt() method
// It returns the unicode of the character at a specific index in a string:
//The method returns a UTF-16 code(an integer between 0 and 65535).

/* The Unicode Standard provides a unique number for every character, no matter the platform, device, application or language.
UTF-8 is a popular Unicode encoding which has 88-bit code units.
*/
var st1 = "HELLO WORLD";
console.log(st1.charCodeAt(0)); // 72



//👨‍💻 Practice

// Return the Unicode of the last character in a string

let st2 = "HELLO WORLD";
let lastChar = str.length - 1;

console.log(str.charCodeAt(lastChar)); // 105


// Property Access
// ECMAScript 5 (2009) allows property access [ ] on strings

var s = "HELLO WORLD";
console.log(str[0]); // A

//👉 Other useful methods

let myname = "Utkarsh Agarwal";
console.log(myname.toUpperCase()); // UTKARSH AGARWAL
console.log(myname.toLowerCase()); // utkarsh agarwal

// 9️⃣ concat() method

let fname = "Utkarsh";
let lname = "Agarwal";
console.log(fname + lname); //UtkarshAgarwal
console.log(`${fname} ${lname}`);//Utkarsh Agarwal
console.log(fname.concat(lname)); //UtkarshAgarwal
console.log(fname.concat(" ",lname));//Utkarsh Agarwal

//🔟 String.trim()
// The trim() method removes whitespaces from both sides of a string.

var s1 = "     Hello World";
console.log(s1); //     Hello World
console.log(s1.trim());// Hello World

// 1️⃣1️⃣ Converting a string to an array
// A String can be converted to an array with the split() method

var text = "a,b,c,d,e"; //String
// split on commas
console.log(text.split(",")); // [ 'a', 'b', 'c', 'd', 'e' ]
// split on spaces
console.log(text.split(" "));//[ 'a,b,c,d,e' ]
// split on pipe
console.log(text.split(" | "));//[ 'a,b,c,d,e' ]



