//1️⃣ while loop statement

var num = 0;
while(num <= 10){
    console.log(num);
    num++;
}

//2️⃣Do-while loop statement

var num = 0;
do{
    console.log(num);
    num++;
}while(num>=10);

//3️⃣ for loop statement
for(var num = 0; num <= 10; num++){
    console.log(num);
}

// JS Program to print the table for given number (8) using for loop

for(var num = 1; num <= 10; num++){
    var tableOf = 8;
    console.log(tableOf + " * "+ num+ " = "+ tableOf*num);
   
}