const prompt = require('prompt-sync')();

let board = [" ", " ", " ", " ", " ", " ", " ", " ", " "];
let currentPlayer = "X";
let moves = 0;

let winningCombos = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
    [0, 4, 8], [2, 4, 6] // Diagonals
];

console.log("Welcome to Tic Tac Toe!");

let keepPlaying = true; 

while(keepPlaying) {
    // Display the board
    console.log(' ---------------------- New Board ----------------------');
    console.log(board[0] + "|" + board[1] + "|" + board[2]);
    console.log("-+-+-");
    console.log(board[3] + "|" + board[4] + "|" + board[5]);
    console.log("-+-+-");
    console.log(board[6] + "|" + board[7] + "|" + board[8]);

    let input = prompt("Enter a position (0-8) for "  + currentPlayer + ":");
    console.log(`You chose: ${input}`);

    if (!input) {
        console.log(`You quit.`);
        keepPlaying = false;
    }   

    let position = parseInt(input);

    if (position >= 0 && position <= 8 && board[position] === " ") {
        board[position] = currentPlayer;
        moves++;

        for (var i = 0; i < winningCombos.length; i++) {
            if (board[winningCombos[i][0]] !== " " &&
                board[winningCombos[i][0]] === board[winningCombos[i][1]] &&
                board[winningCombos[i][0]] === board[winningCombos[i][2]]) {
                console.log(currentPlayer + " wins!");
                keepPlaying = false;

                console.log(' ---------------------- Winning Board ----------------------');
                console.log(board[0] + "|" + board[1] + "|" + board[2]);
                console.log("-+-+-");
                console.log(board[3] + "|" + board[4] + "|" + board[5]);
                console.log("-+-+-");
                console.log(board[6] + "|" + board[7] + "|" + board[8]);
            }
        }

        // Check for tie
        if (moves === 9) {
            console.log("It's a tie!");
            keepPlaying = false;

            console.log(' ---------------------- Winning Board ----------------------');
            console.log(board[0] + "|" + board[1] + "|" + board[2]);
            console.log("-+-+-");
            console.log(board[3] + "|" + board[4] + "|" + board[5]);
            console.log("-+-+-");
            console.log(board[6] + "|" + board[7] + "|" + board[8]);
        }

                // Switch player
        currentPlayer = (currentPlayer === "X") ? "O" : "X";
    } else {
        console.log("Invalid position. Try again.");
    }
}