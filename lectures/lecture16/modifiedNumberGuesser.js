// Get a random number between 0 - 10 (whole number)
const randomNumber = Math.round(Math.random() * 10)

// Simulate getting user input, but without interacting with the user
let guessedNumber = 5;

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