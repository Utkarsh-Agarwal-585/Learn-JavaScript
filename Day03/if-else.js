// Control Statement
// 1️⃣ if-else

var tomr = 'rain';

if(tomr == 'rain'){
    console.log('take a raincoat');
}
else{
    console.log('No need to take raincoat');
}


// Program to checkgiven year is leap year or not

var year = 2020;
debugger;
if(year % 4 === 0){
    if(year % 100 === 0){
        if(year % 400 === 0){
            console.log("The Year "+ year + " is a leap year" );
        }else{
            console.log("The Year "+ year + " is not a leap year" );
        }
    }else{
        console.log("The Year "+ year + " is a leap year" );
    }
}else{
    console.log("The Year "+ year + " is not a leap year" );
}



// What is truthy and falsy values in javascript?

// we have total 5 falsy values in javascript
// 👉 0, "", undefined, null, NaN, false** is false anyway

if(score = 0){
    console.log("OMG, we loss the game 😭");
}else{
    console.log("Yay, we won the game 🙂 ");
}


//2️⃣ Conditional(ternary) operator

// It is the only JavaScript opoerator that takes three operands

var age = 17;
console.log((age >= 18) ? "you can vote" : "you can't vote");

// 3️⃣ Switch Statement

var area = "circle";
var PI = 3.142, l=5,b=4,r=3;
switch(area){
    case 'circle':
        console.log("the area of circle is : "+ PI*r**r);
        break;
    case 'triangle' :
        console.log("the area of the tiangle is : "+ (l*b)/2);
        break;
    case 'rectangle':
        console.log("the area of the rectangle is : " + (l*b));   
        break;
    default:
        console.log("please enter valid data"); 
}