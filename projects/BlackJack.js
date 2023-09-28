const prompt = require('prompt-sync')();

let total = 0;

while (total < 21) {
    const userNumber = Number(prompt("Choose a number between 1 and 5: "));

    if (userNumber < 1 || userNumber > 5) {
        console.log("Invalid choice. Please select a number between 1 and 5.");
        continue;
    }

    total += userNumber;

    const computerNumber = Math.floor(Math.random() * 5) + 1; // Random number between 1 and 5
    total += computerNumber;

    console.log(`Computer added: ${computerNumber}`);
    console.log(`Your current total is ${total}.`);

    if (total === 21) {
        console.log("Congratulations! You got exactly 21.");
        break;
    } else if (total > 21) {
        console.log("Your total went over 21. You lose.");
        break;
    }
}