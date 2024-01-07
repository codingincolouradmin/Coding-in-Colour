// A summary of the code we executed during our Lecture 17: Review & Loops I
// Hint: add // to console logs you don't want to print in the terminal

// Example 1
// This example is just a summary of if-else conditionals

let fruit1 = ""; // You can type what input you want to put here
if (fruit1 == "banana") {
    console.log("Your favourite fruit is banana");
} else {
    console.log("Your favourite fruit is something else");
}

// Example 2
// This example is just a summary of if-else conditionals

let fruit2 = ""; // You can type what fruit you want here (string)
let number1 = 0; // You can type what number you want here (number)
if (fruit2 == "banana" && number1 == 3) {
    console.log("Abracadabra");
} else {
    console.log("Hello world!");
}

// Example 3
// This example is an extension, with if-statemnent chaining

let fruit3 = ""; // You can type what fruit you want here (string)
let number2 = 0; // You can type what number you want here (number)
if (fruit3 == "banana" && number2 == 3) {
    console.log("Abracadabra");
} else if (fruit3 > "apple" && number2 == 4) {
    console.log("Mango");
} else {
    console.log("Hocus pocus");
}

// Example 4
// Bank balance example
let balance = 100; // You can type any value you want here (number)
balance = balance + 40 // You make a deposit of 40 dollars
balance = balance - 100 // You make a withdrawal of 100 dollars
console.log('Your bank account balance is ', balance);

// Example 5
// Loop Tree Example
for (let i = 0; i < 4; i = i + 1) {
    console.log('we are at tree ', i);
}

// Example 6
// Counting up
for (let i = 0; i < 5; i = i + 1) {
    console.log(i)
}

// Example 7
// Counting down
for (let i = 5; i > 0; i = i - 1) {
    console.log(i)
}

// Example 8
// Counting ??? -> commenting it out so it doesn't run infinitely
// for (let i = 0; i > 5; i = i - 1) {
//     console.log(i)
// }

// Example 9
// Changing increments
for (let i = 0; i < 5 ; i = i + 2) {
    console.log(i)
}

// Example 10
// Loop within a loop
for (let i = 1; i <= 5; i = i + 1) {
    for (let j = 1; j <= 5; j = j + 1) {
        console.log(j, ' times ', i, ' equals ', i * j);
    }
    console.log('-----------');
}