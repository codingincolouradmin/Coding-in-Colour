const prompt = require('prompt-sync')();

// Random number between 1 and 100
const randomNumber = Math.floor(Math.random() * 100);

console.log('Guess the number between 1 and 100!');

let guessedNumber = prompt('Your guess: ');
guessedNumber = parseInt(guessedNumber);

if (guessedNumber === randomNumber) {
    console.log(`Congratulations! You guessed the number!`);
} else {
    console.log('Better luck next time!');
} 
