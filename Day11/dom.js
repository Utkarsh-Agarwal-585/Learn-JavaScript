//👉 Document Object Model in JS 

//1️⃣ Window is the main container or we can say the global object and any operations related to entire browser window
// can be a part of window object.

//for ex, the history or to find the url etc.

//1️⃣ whereas the DOM is the child of window object.

//2️⃣ All the members like objects, methods or properties.
// If they are the part of window object then we do not refer the window object. Since, window is the global object
// So you do not have to write down window.
// - It will be figured out by the runtime.

//For example
//👉 window.screen or just screen is a small info object about physical screen dimensions.
//👉 window.location giving the current URL
//👉 window.document or just document is the main obj of the potentially visible DOM.

//2️⃣ Where in the DOM, we need to refer the document, if we want to use the document object, methods or properties
// Ex: 👉 document.getElementById()

//3️⃣ Window has methods, properties and objects.
// Ex: 👉 setTimeout() or setInterval() are the methods 
// whereas Document is the obj of the window and it also has a screen obj with properties describing the physical display.

// So, example of window object properties are
// innerHeight, innerWidth and many more

//----------------DOM vs BOM-------------------

//👉 DOM is the Document Object Model, which deals with the document, the HTML elements themselves,
// e.g., document and all traversal you would do in it, events etc..

//e.g., Change the background color to red
// document.body.style.background = "red"

//👉 BOM is the Browser Object Model, which deals with the browser components aside from the document, like history, location, navigator, frames,
//XMLHttpRequest and screen(as well as some others that vary by browser) OR
// In simple meaning all the Window Operations which comes under BOM are performed using BOM.



// Let's see more practical on History object
// make any button along with function that will tell the history which the user has used and call that function. In the declaration of the function
// window.history.back()
// used

// Functions alert/confirm/prompt are also a part of BOM:
// they are directly not related to the document, but represent pure browser methods of communicating with the user.

/*alert(location.href); //shows the current URL
if(confirm("Want to visit YouTube?")){
    location.href = "https://www.youtube.com";
}*/


//0️⃣4️⃣ Navigate throgh the DOM
// try these on domNavigation.html file
//1. document.documentElement
    // returns the Element that is the root element of the document.
//2. document.head
//3. document.body
//4. document.body.childNodes (text include tab, enter and whiteSpace)
    // list of the direct children only
//5. document.children (without text nodes, only regular Elements)
//6. document.childNodes.length


//👉 check whether an element has childNodes or not?
// document.body.hasChildNodes()

//👉 Practice Time 
// check the results on pic1.png and pic2.png
// How to find the child in DOM tree
// firstChild vs firstElementChild
// lastChild vs lastElementChild
// const data = document.body.firstElementChild;
// Undefined
// data
// data.firstElementChild ("return main-div as a child")
// data.firstElementChild.firstElementChild   ("return child-one")
// data.firstElementChild.firstElementChild .style.color = "red"
// vs 
// document.querySelector(".child-two").style.color = "yellow";

// 👉 How to find the parent Nodes
// document.body.parentNode
//document.body.parentElement

// 👉 How to find or access the siblings
// doocument.body.nextSibling
// doocument.body.nextElementSibling
// doocument.body.previousSibling
// doocument.body.previousElementSibling

// SECTION 4️⃣:How to search the Elements and the References 
// New File "search.html"

// 👨‍💻 Difference between getElementById and querySelector

// what is getElementById()?
//syntax : element = document.getElementById(id);
// returns a reference to the element by its ID
// If the element with the specified ID is not in the document, it will return null.

// what is querySelector()?
// syntax : element = document.querySelector(selectors);
// returns the first element within the document.
// that matches the specified group of selectotrs, or null if no matches are found.