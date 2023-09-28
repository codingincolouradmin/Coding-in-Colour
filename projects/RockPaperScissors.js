const prompt = require('prompt-sync')();

let userScore = 0;
let computerScore = 0;
let rounds = 0;
let rematch = true; 

while (rematch) {
    while (rounds < 3) {
        const userChoice = prompt("Choose Rock, Paper, or Scissors:").toLowerCase();

        if (userChoice !== "rock" && userChoice !== "paper" && userChoice !== "scissors") {
            console.log("Invalid choice. Please select Rock, Paper, or Scissors.");
            continue;
        }

        const randomNum = Math.floor(Math.random() * 3);
        let computerChoice;

        if (randomNum === 0) {
            computerChoice = "rock";
        } else if (randomNum === 1) {
            computerChoice = "paper";
        } else {
            computerChoice = "scissors";
        }

        console.log(`Computer chose ${computerChoice}`);

        if (userChoice === computerChoice) {
            console.log("It's a tie!");
        } else if (
            (userChoice === "rock" && computerChoice === "scissors") ||
            (userChoice === "scissors" && computerChoice === "paper") ||
            (userChoice === "paper" && computerChoice === "rock")
        ) {
            userScore++;
            console.log("User wins the round!");
        } else {
            computerScore++;
            console.log("Computer wins the round!");
        }

        rounds++;
    }

    console.log(`Final Scores: User: ${userScore}, Computer: ${computerScore}`);
    if (userScore > computerScore) {
        console.log("User wins the game!");
    } else if (computerScore > userScore) {
        console.log("Computer wins the game!");
    } else {
        console.log("The game is a tie!");
    }

    const replay = prompt("Do you want to play again? (yes/no)").toLowerCase();
    if (replay === "yes") {
        // You'd reset scores and rounds here and might need to wrap the game logic into a larger loop to replay
        console.log("Rematch!");
        userScore = 0;
        computerScore = 0;
        rounds = 0;
        rematch = true; 
    } else {
        console.log("Thanks for playing!");
        rematch = false; 
    }
}