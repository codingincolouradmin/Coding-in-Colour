const prompt = require('prompt-sync')(); // library for handling user input

// Get a random number between 0 - 10 (whole number)
const randomNumber = Math.round(Math.random() * 10)
// Math.random() -> returns a decimal between 0 and 1, so for example 0.234
// 0.234 -> 2.34
// Math.round(2.34) -> 2

// Get the user's input
let guessedNumber = Number(prompt("Guess a number between 0 and 10: ")); // convert that to a Number

// Number(prompt("Guess a number between 0 and 10: "))
// Number("3") 
// 3

// Compare the number guessed to the random number
if (guessedNumber === randomNumber) {
    console.log('Correct guess! The number is: ' + guessedNumber);
} else {
    if (guessedNumber < 0 || guessedNumber > 10) {
        console.log('Invalid user input: ' + guessedNumber);
    } else { // This means our number is between 0 and 10 (including 0 and 10) -> valid input
        if (guessedNumber > randomNumber) {
            console.log('The guessed number is too high ', guessedNumber + ' > ' + randomNumber);
        }
        if (guessedNumber < randomNumber) {
            console.log('The guessed number is too low ', guessedNumber + ' < ' + randomNumber);
        }
    }
}