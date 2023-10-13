
/**
 * October 3rd Assignment:
 *      Part 1 (Morning): Debugging
 *      Part 2 (Afternoon): Working with Arrays
 */

/**
 * Part 1: Debugging
 *      - Q1. Buggy Calculator
 *      - Q2. Convert if-else chain to switch statement
 *      - Q3. Convert if-else statements to ternary operators
 */

// Q1. Buggy Calculator

let operation = 'add'
let a = 5;
let b = 3;
let result;

if (typeof a !== 'number' || typeof b !== 'number') {
    console.log('Please provide valid numbers for the operation.');
} else {
    switch (operation) {
        case 'add':
            result = a + b;
        case 'subtract':
            result = a - b;
        case 'multiply':
            result = a x b;
        case 'divide':
            if (b == 0) {
                console.log('Division by zero not allowed.')
            } else {
                result = a / b;
            }
        default:
            console.log('Invalid operation');
    }
    console.log(`The result of ${a} ${operation} ${b} = ${result}`)
}

// With the current values and operation, it should output: "The result of 5 add 3 = 8"
// Please find all the bugs and correct them, also adding comments where you found the bugs

// Q2. Convert the following if-else chain to a switch statement, while still maintaining the correct output.

let title = "Die Hard";
let genre;

if (title === "Star Wars") {
  genre = "Science Fiction";
} else if (title === "The Shawshank Redemption") {
  genre = "Drama";
} else if (title === "Toy Story") {
  genre = "Animation";
} else if (title === "Halloween") {
  genre = "Horror";
} else if (title === "Die Hard") {
  genre = "Action";
} else {
  genre = "Unknown Genre";
}

console.log(`The genre of "${title}" is ${genre}.`);

// Write your code below this line -->


// Q3. Convert the following if-else statements to a ternary operator
// Exercise #1:
let number = 7;
let type;

if (number % 2 === 0) {
  type = "Even";
} else {
  type = "Odd";
}

console.log(`The number ${number} is ${type}.`);
// Write your code below this line -->


// Exercise #2:
let grade = 58;
let outcome;

if (grade >= 60) {
  outcome = "Passing";
} else {
  outcome = "Failing";
}

console.log(`With a grade of ${grade}, the outcome is: ${outcome}.`);
// Write your code below this line -->


// Exercise #3:
let temperature = 18; // Celsius
let weather;

if (temperature > 20) {
  weather = "Hot";
} else {
  weather = "Cold";
}

console.log(`With a temperature of ${temperature}°C, it's ${weather}.`);
// Write your code below this line -->


/*
    * Part 2: Favourite Songs
    * Description: For each of the questions following, write a new line of code (do not remove code you have already written)
*/

// Question 1:
// Use an array to make a list of 5 of your favorite songs. Print the entire array and its length.
// Write your code below this line -->


// Question 2:
// Change the third song on your list to a song that you really dislike. Print the modified array.
// Write your code below this line -->


// Question 3:
// Remove a song from the end of your array. Print the modified array.
// Write your code below this line -->


// Question 4:
// Add a new song to the end of your array. Print the modified array.
// Write your code below this line -->

// Question 5:
// Remove a song from the beginning of your array. Print the modified array.
// Write your code below this line -->

// Question 6:
// Add a new song to the beginning of your array. Print the modified array.
// Write your code below this line -->

// Question 7:
// Try to access the 10th song on your list. What happens?
// Write your code below this line -->

/*
    * Part 3: Sums in 2D Arrays
    * Description: You are given the following 2D array: [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
*/

// Question 8:
// Use a for loop to print the sum of each row on a new line.
// Write your code below this line -->

// Question 9:
// Use a for loop to calculate the sum of the diagonals.
// Write your code below this line -->

// Question 10 (Challenge):
// Do both in a single for loop!
// Write your code below this line -->



/**
 * Part 4: Movie Theatre
 * Description: 
 *      You are nosw going to explore how to represent a movie theatre as an array of arrays.
 *      Make an array representation of a theatre with 3 rows and 5 seats per row, and print the representation of your theatre.
 */

/**
 * Question 11:
 * Description:
 *      You are now accepting ticket purchases, and need to put an "X" in the seats that are purchased. 
 *      Seats are booked using user input for which row and seat number they want (e.g., row 3, seat 3).
 *      They will be asked for the row number and seat number separately. If a seat is already booked, the user should be asked to try again. 
 *      Otherwise, a new 'X' will be placed in the chosen seat.
 */
// Write your code below this line -->
