const prompt = require('prompt-sync')();

let expenses = [];
let totalExpense = 0;

while (true) {
    console.log("\nExpense Tracker Menu:");
    console.log("1. Add Expense");
    console.log("2. View Total Expenses");
    console.log("3. Exit");

    let choice = prompt('Enter your choice: ');

    switch (choice) {
        case '1':
            let description = prompt('Enter expense description: ');
            let amount = parseFloat(prompt('Enter expense amount: '));

            expenses.push({ description, amount });
            totalExpense += amount;
            console.log(`Added an expense of $${amount} for ${description}`);
            break;

        case '2':
            console.log("\nExpenses:");
            for (let expense of expenses) {
                console.log(`- $${expense.amount} for ${expense.description}`);
            }
            console.log(`Total: $${totalExpense}`);
            break;

        case '3':
            console.log("Goodbye!");
            process.exit();

        default:
            console.log("Invalid choice. Please select a valid option.");
    }
}