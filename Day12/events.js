/* 👉 Events in JavaScript */

// HTML events are "things" that happen to HTML elements.
// When JS is used in HTML pages, JS can "react" on these events.

// 👨‍💻 HTML Events
// An HTML events can be something the browser does, or something a user does

// Ex. 
// An HTML web page was finished loading
// An HTML input field was changed
// An HTML button was clicked
// Often, when events happen, you may want to do something

// JS lets you execute code when events are detected
// HTML allows event handler attribute, with JS code, to be added to HTML elements.

// section 1️⃣: 4 ways of writing events in JS

//1. using inline events alert();
//2. By calling a function (we already seen and  most common way of writing)
//3. using Inline events(HTML onclicks="" property and element.onclick)
//4. using Event Listeners (addEventListener and IE's attachEvent)

// check the Events HTML File

// section 2️⃣: What is Event Object?
// Event Object is the parent object of the event object.

// for Example 
// MouseEvent, focusEvent, KeyboardEvent etc 



// section ️3️⃣ MouseEvent in JavaScript
// The MouseEvent Object
// Events that occur when the mouse interacts with the HTML 
// document belongs to the MouseEvent Object.
//mouseEnterLeave event:
// const mEnter = document.getElementById('box');
// mEnter.addEventListener('mouseenter', () => {
//    mEnter.style.backgroundColor = 'red';
//    console.log('Mouse Enter');
//});
// mEnter.addEventListener('mouseleave', () => {
//    console.log('Mouse leave');
//   mEnter.style.backgroundColor = 'pink'; 
//});



// section ️4️⃣ KeyboardEvent  in JavaScript
// Events that occur when user presses a key on the keyboard, 
// belongs to the KeyboardEvent Object.
// https://www.w3schools.com/jsref/obj_keyboardevent.asp
// onkeypress, onkeydown(when you press the key), onkeyup(when you leave the pressing key) events.
//eg. <input type = "text" onkeypress = "keyPress()">
// <p id = "keys"></p>
// <script>
// const keyPress=() => {
//  document.getElementById('keys').innerHTML = `you press ${event.key} and it's code is ${event.code}`;
//}
//</script>

// Section 5️⃣ InputEvents in JavaScript 
// The onchange event occurs when the value of an element has been changed.

// For radiobuttons and checkboxes, the onchange event occurs when the 
// checked state has been changed.
//eg. we have a input box and a list of items so, whatever the user write the name and select the category, it print the names and list item in 
// the console.
// <input type = "text" onchange = selectElement()>
// <select (create some list items)
//<script>
// const selectElement = () => {
//const inputChange = document.getElementById('ice').nodeValue; // text field or inputbox
//    const iceCreams = document.getElementById('icecreams').nodeValue;  //the list item

//    console.log(`${inputChange} and ${iceCreams}`);
//}
// </script>
