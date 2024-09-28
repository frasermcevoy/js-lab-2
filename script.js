//Step 2: if else condition

let number = 5
if (number > 0) {
    console.log('Number is positive');
} else if (number < 0) {
    console.log('Number is negative');
} else (number = 0) =>
    console.log('Number is 0');

//Step 3: Switch Statement

    var weekday = '6';

    switch (weekday) {
        case '1':
            console.log('Monday');
            break;
        case '2':
            console.log('Tuesday');
            break;
        case '3':
            console.log('Wednesday');
            break;
        case '4':
            console.log('Thursday');
            break;
        case '5':
            console.log('Friday');
            break;
        case '6':
            console.log('Saturday');
            break;
        case '7':
            console.log('Sunday');
            break;
        default:
            console.log('Wednesday');
    }

// Step 4: For, while, Do...While
// for

for (let i = 1; i <= 5; i++) {
    console.log(i)    // Print i
    }

    console.log("For^^^");

// while
let i = 1;
 
while (i <= 5) { 
    console.log(i);// Print i and increment
    i++
﻿ }

console.log("While^^^");

//Do While

let j = 1;

do {
    console.log((j));
    j++;
} while (j < 6);

console.log("Do...while^^^");

//Step 5: Control Flow with Break and Continue

for (i = 1; i <= 5; i++) {
    if (i === 3) {
        break; // Exit the loop when i = 3
    }
    console.log(i);
}
console.log("Loop exited at i = 3");

for (i = 1; i <= 5; i++) {
    if (i === 3) {
        continue; // Skips 3 in the loop when i = 3
    }
    console.log(i);
}
console.log("Loop skips at i = 3");

// Step 6: Scope and Context

let globalVariable = "walrus";

function myFunction() {
  // ^^ This function can access walrus
  console.log(globalVariable);
}

myFunction();

//?? need to revisit this another time