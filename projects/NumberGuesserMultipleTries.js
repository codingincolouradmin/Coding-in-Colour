const prompt = require('prompt-sync')();

// Random number between 1 and 100
const randomNumber = Math.floor(Math.random() * 100) + 1;

console.log('Guess the number between 1 and 100!');

let guessedNumber;
let attempts = 0;

let keepPlaying = true;

while (keepPlaying) {
    // Get user input
    guessedNumber = prompt('Your guess: ');

    if (!guessedNumber) {
        console.log(`You quit.`);
        keepPlaying = false;
    }   

    guessedNumber = parseInt(guessedNumber);

    // Increment attempts
    attempts++;

    if (guessedNumber === randomNumber) {
        console.log(`Congratulations! You guessed the number in ${attempts} attempts.`);
        keepPlaying = false;
    } else if (guessedNumber > randomNumber) {
        console.log('Too high! Try again.');
    } else {
        console.log('Too low! Try again.');
    }
}