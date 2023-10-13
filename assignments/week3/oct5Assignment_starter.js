/**
 * Oct 5th Assignment:
 *      Part 1 (Morning): Refactoring Rock Paper Scissors Game
 *      Part 2 (Afternoon): Banking System
 */

/**
 * Part 1: Rock Paper Scissors
 * Description:
 *      Today, we'll be revisiting functions and refactoring the rock-paper-scissors game we worked on during the past lab.
 *      We can provide a few hints that can help you think about how you'd go about this process. 
 *      One important thing to think about is to review the existing code and look into how we can 'compartmentalize' functionality to make our code cleaner.
 * 
 *      Think about the following:
 *      - A function that gets user input and handles invalid input (e.g., getting the user's choice for rock, paper, or scissors). There's a lot of potential functions we can isolate here.
 *      - A function that determines the computer's choice randomly (rock, paper, or scissors).
 *      - A function that determines who won the current round and updates the score appropriately.
 *      - A function that prints out the round score.
 *      - A function that prints out the final score.
 *      The above are all suggestions for potential functions. There are likely many other ways to refactor this code.
 * 
 *      Another useful thing to do with the above functions is to add comments in the following style before we write the function:
 *          // Requires: what sort of input is going into this function?
 *          // Does: what does the function do/check for/accomplish?
 *          // Returns: what type of value does the function return?    
 */
// Write your code below this line -->


/**
 * Part 2: Banking System
 * Description
 *      You are tasked with designing banking software for a local bank. 
 *      The bank offers various account types to its clients, notably Savings Accounts and Checking Accounts. 
 *      Both these account types share certain features but also have unique functionalities that differentiate them. 
 *      Your goal is to design a system using classes to represent these different types of accounts.
 * 
 * Requirements:
 *      Properties of an object should only be accessed via methods of that object (getter & setter methods). 
 */

/**
 * Question 1: Create a BankAccount Class:
 *      Properties: accountHolderName, balance
 *      Methods:
 *       - deposit(amount): Increase the balance by the specified amount and return a message.
 *       - withdraw(amount): Decrease the balance by the specified amount and return a message. Ensure the account doesn't go into negative.
 *       - getBalance(): Returns the current balance.
 */
// Write your code below this line -->


/**
 * Question 2: Create a SavingsAccount Class:
 *      Inherits from BankAccount
 *      Additional Property: minimumBalance - the account should always maintain this minimum balance.
 *      Methods:
 *       - Override the withdraw method to ensure that withdrawals don't drop the balance below the minimumBalance.
 */
// Write your code below this line -->

/**
 * Question 3: CheckingAccount Class:
 *      Inherits from BankAccount 
 *      Additional Property: overdraftLimit - an additional amount that account holders can withdraw beyond their current balance.
 *      Methods:
 *       - Override the withdraw method to permit overdraft up to the defined limit.
 */
// Write your code below this line -->

/**
 * Testing:
 *      Ensure your system works correctly by instantiating objects from your classes and testing them. Here are some scenarios to consider:
 *      - Create a SavingsAccount for a user named "John Doe" with an initial balance of $1500 and a minimum balance requirement of $500.
 *      - Try withdrawing an amount that would drop the balance below the minimum balance.
 *      - Withdraw an acceptable amount and confirm the new balance.
 *      - Create a CheckingAccount for a user named "Jane Smith" with an initial balance of $500 and an overdraft limit of $300.
 *      - Attempt a withdrawal that exceeds the balance but stays within the overdraft limit.
 *      - Try to withdraw an amount that exceeds both the balance and the overdraft limit.
 *      Try adding more actions to ensure that the system is working correctly
 */
// Write your code below this line -->
