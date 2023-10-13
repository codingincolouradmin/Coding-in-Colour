// Import setup
const prompt = require('prompt-sync')(); 

/**
 * October 4th Labs
 *      Lab 1 (Morning)
 *      Lab 2 (Afternoon)
 */

/**
 * Lab 1.1: Object-ifying Yourself
 * 
 * 1. Create an object representing yourself. The object should have properties like name, age, isStudent, etc. Print the entire object.
 * 2. Access and print 3 of the properties using dot notation.
 * 3. Try to access an attribute that hasn't been set, like middleName. What gets printed?
 * 4. Remove the isStudent property from your object without changing your original object declaration. 
 * 5. Add the following properties:
 *      - hobbies (an array of 3 strings)
 *      - favoriteColour
 *      - favoriteSongs (an array of 4 strings) 
 * 6. Print the entire modified object. 
 * 7. Use object dot notation and array accessing to print out the following: 
 *      “One of my hobbies is __[Your first hobby]___ and the song I play while doing this hobby is ___[Your third favorite song]___”
 * 8. Repeat the above, but using bracket notation instead. 
 * 9. Create the following variable declaration and initialization (let hobbies = 'favoriteFood'). Print out the results of the following and for 
 *      each one, describe why you get the results that you do: 
 *      - objectName.hobbies;
 *      - objectName[hobbies];
 *      - objectName[‘hobbies’];
 */
// Write your code below this line -->

/**
 * Lab 1.2: Expense Tracker
 * 
 * 1. Use everything you have learned so far to recreate the expense tracker project that you have seen the instructors create. 
 * 2. The idea behind the expenses tracker is to do the following:
 *      - Prompt the user to ask them to enter a description for an expense, as well as the amount, in the best way you think possible
 *      - Store that expense, in the best way you think possible
 *      - Continue this process, until the user wants to exit, at which point, you display the cost of each expense and the total cost of all expenses
 * 3. Make sure you do this yourself! It it more important to us that you learn how to do it, than to “get it right on the first try”
 * 
 * Challenges:
 *      - Ask users to categorise their expenses (e.g., "food", "entertainment", "travel") and display a summary of expenses based on categories.
 *      - Let users set a budget limit at the start. Notify the user and cancel any more additions if their total expenses exceed the budget limit.
 */
// Write your code below this line -->

/**
 * Lab 2.1
 * Description:
 *  Write functions that perform the following tasks (1 function per task)
 * 
 * 1. A function that takes two parameters, a grade and the total, and produces a letter grade to represent the score.
 *      The grading scale is:
 *      - 90-100%: A
 *      - 80-90%: B
 *      - 70-80%: C
 *      - 60-70%: D
 *      - < 60%: F
 *      For e.g., think of it like this; if we score 9 out of 10, our 'grade' is 9, the 'total' is 10, the percentage is 90%, so our letter grade is 'A'
 * 
 * 2. A function that counts the number of vowels in a string.
 * 
 * 3. A function that, when provided a sentence (string), returns the longest word in the sentence
 */
// Write your code below this line --> 

/**
 * Lab 2.2
 * Description:
 *  For your Blackjack project from last week’s lab (Friday), 
 *  improve your code (in a new copy of your .js file so you don’t lose your work) by converting your game to use the following functions:
 * 
 *   - A function that is responsible for asking for user input and checking if it is valid input
 *   - A function that will add the user’s input to the current sum and add on a new random number each time
 *   - A function that is responsible for checking if the game is over and stopping the game if it is
 *   - A function that is responsible for printing a winning or losing message to the console depending on whether the user won or not
 */
// Write your code below this line -->