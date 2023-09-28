const prompt = require('prompt-sync')(); // library for handling user input

// Get a random number between 0 - 10 (whole number)
const randomNumber = Math.round(Math.random() * 10)

// Get the user's input
let guessedNumber = Number(prompt("Guess a number between 1 and 10: ")); // convert that to a Number

// Compare the number guessed to the random number
if (guessedNumber === randomNumber) {
    console.log('Correct guess! The number is: ' + guessedNumber);
} else {
    if (guessedNumber < 0 || guessedNumber > 10) {
        console.log('Invalid user input: ' + guessedNumber);
    } else {
        if (guessedNumber > randomNumber) {
            console.log('The guessed number is too high ', guessedNumber + ' > ' + randomNumber);
        }
        if (guessedNumber < randomNumber) {
            console.log('The guessed number is too low ', guessedNumber + ' < ' + randomNumber);
        }
    }
}