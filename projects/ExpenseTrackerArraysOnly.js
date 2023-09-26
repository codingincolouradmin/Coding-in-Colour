const prompt = require('prompt-sync')();

let expenses = [];

console.log("Expense Tracker");
console.log("Keep adding your expenses. Type 'exit' to quit.");

while (true) {
    let expense = prompt('Enter expense description in this format, "Car Wash, $10" (or type "Exit" to quit): ');

    if (expense.toLowerCase() === 'exit') {
        break;
    }

    expenses.push(expense);
}

console.log("Your expenses are:");
for (let expense of expenses) {
    console.log(expense)
}