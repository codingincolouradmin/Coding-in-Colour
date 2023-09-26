const prompt = require('prompt-sync')();

let expenses = [];

console.log("Simple Expense Tracker\n");
console.log("Keep adding your expenses. Type 'exit' to quit.");

while (true) {
    let description = prompt('Enter expense description (or type "exit" to quit): ');

    if (description.toLowerCase() === 'exit') {
        break;
    }

    let amount = parseFloat(prompt('Enter expense amount: '));

    expenses.push({ description, amount });
    console.log(`Added an expense of $${amount} for ${description}\n`);
}

console.log("\nExpenses Summary:");
let totalExpense = 0;
for (let expense of expenses) {
    console.log(`- $${expense.amount} for ${expense.description}`);
    totalExpense += expense.amount;
}
console.log(`Total: $${totalExpense}`); 