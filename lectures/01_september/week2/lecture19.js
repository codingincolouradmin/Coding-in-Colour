const prompt = require('prompt-sync')();

/**
 * While Loop Example 1
 */
let x = 0;
while (x < 2) {
    console.log('x is less than 2');
    x = x + 1; 
    console.log('x has been updated to ', x);
}

/**
 * While Loop Example 2
 */
let keepRunning = true; // condition for whether or not we enter the while loop

while (keepRunning) {
    console.log('We have entered the while loop');
    let userInput = prompt("Do you want to stay in the while loop (yes/no): ");

    if (userInput !== "yes") {
        break;
    }
}

/**
 * Making a For Loop look like a while (Example 4)
 */
let i = 0;
let condition = i < 5;

for (condition;;) {
    if (i == 1) {
        break;
    }
    console.log('Our number is ', i);
    i = i + 1
}

/**
 * While vs do-while (Example 5)
 */
let y = 0;
while (y != 0) {
    console.log("Hello");
}

let z = 0;
do {
    console.log("Hello");
} while (z != 0)


/**
 * Conditional Statements & Logical Evaluation (Example 6)
 */
let fruit = "apple";
let number = 4

let expression1 = fruit == number
//  expression1 = "apple" == 4
//  expression1 = false
console.log(expression1);

let condition1 = fruit == number;   // false
let condition2 = "apple" < "mango"  // true
let condition3 = number == "4";     // true
let condition4 = number === "4";    // false 

let expression2 = ((condition1 && condition2) || (condition3 && condition2)) && condition4
//  expression2 = ((false && true) || (true && true)) && false
//  expression2 = (false || true) && false
//  expression2 = (true) && false
//  expression2 = false
console.log(expression2);

/**
 * Rock Paper Scissors Game (Example 7)
 */
let play = true; // play represents if we want to play or not

// User is playing the game
while (play) {
    // score, rounds
    let roundsLeft = 5;
    let userScore = 0;
    let computerScore = 0;

    // Game itself -> rock, paper, scissors, 
    // user input, computer input, who wins?
    while (roundsLeft > 0) {

        // Get user input
        const userInput = prompt("Choose Rock, Paper, or Scissors: ").toLowerCase() // Assume the input is correct -> "rock", "paper", or "scissors"

        // Get computer's choice
        const randomNum = Math.floor(Math.random() * 3) // randomNum will either be 0, 1, or 2
        let computerChoice;
        
        // Set computer's choice to "rock", "paper" or "scissors"
        if (randomNum == 0) {
            computerChoice = "rock";
        } else if (randomNum == 1) {
            computerChoice = "paper";
        } else {
            computerChoice = "scissors";
        }

        // Feedback about choices
        console.log("You chose: ", userInput);
        console.log("Computer chose: ", computerChoice);

        // Decide who wins
        if (userInput == computerChoice) {
            // Tie
            console.log("It's a tie!");

        } else if (
                (userInput == "rock" && computerChoice == "scissors") || 
                (userInput == "paper" && computerChoice == "rock") || 
                (userInput == "scissors" && computerChoice == "paper")
                ) {
            // Where we win
            userScore = userScore + 1;
            console.log("User wins the round!");
        } else {
            computerScore = computerScore + 1;
            console.log("Computer wins the round!");
        }
        console.log(`Current Scores: User: ${userScore}, Computer: ${computerScore}`);
        console.log('---------------------------------------');
        console.log();

        // Update rounds
        roundsLeft = roundsLeft - 1;
    }

    // Print the score
    console.log(`Final Scores: User: ${userScore}, Computer: ${computerScore}`);
    console.log('---------------------------------------');

    // Ask the user if they want to keep playing
    const replay = prompt("Do you want to play again (yes/no)?: ").toLowerCase();

    if (replay != "yes") {
        console.log("Thanks for playing :)");
        play = false;
    }
}