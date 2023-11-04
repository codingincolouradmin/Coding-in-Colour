/**
 * October 10th Assignment
 *      Part 1 (Morning): Hangman Project
 *      Part 2 (Afternoon): See Canvas
 */

/**
 * Part 1: Hangman Project
 * Description: Hangman is a word guessing game. A word is chosen at random, and the player attempts to guess the word one letter at a time. 
 * The word is represented by a row of underscores, signifying each letter of the word. The word is guessed one letter at a time. For every incorrect guess, 
 * a part of a stick figure of a "hanged man" is drawn. The game ends when the player has guessed the word before the figure is fully drawn or if the 
 * figure is completed before the word is guessed (6 incorrect guesses). For this project, your program will not be drawing the visual for hangman, 
 * and will only provide the user feedback about how many tries they have left.
 * 
 *  Game Mechanics:
 *      
 *      Word Selection:
 *      - At the start of the game, a word is selected randomly from a predefined list.
 *      - The word is then displayed to the player as a series of underscores, each representing a letter.
 * 
 *      Player Guesses:
 *      - The player guesses one letter at a time.
 *      - If the letter is in the word, the underscores corresponding to the occurrences of that letter in the word are replaced by the guessed letter.
 *      - If the letter is not in the word, the player loses a try (gains an incorrect try). 
 * 
 *      Tracking Progress:
 *      - The game keeps track of:
 *      - Letters the player has guessed.
 *      - Incorrect guesses (and number of incorrect guesses so far).
 * 
 *      Endgame:
 *      - Win: The player wins when they guess all the letters of the word correctly before the hangman figure is complete.
 *      - Lose: The player loses if the hangman figure is completed before the word is fully guessed.
 * 
 *  Create a program that allows the user to play Hangman. Remember to think about the flow of the program and write your pseudocode before you begin to program! 
 * The process will be much easier if you plan before you code :) Make sure to follow good coding style!
 */
// Write your code below this line -->
