// 6️⃣ Expense Tracker Summary
// Given transactions:
// {
//   type: "income" | "expense",
//   category,
//   amount,
//   date
// }
// Write logic to:
// Calculate total income
// Total expense
// Net balance
// Category-wise expense breakdown
// Highest expense category
function expenseTrackerSummary(transactions) {
    const totalIncome = transactions.reduce((acc, transaction) => {
        if (transaction.type === "income") {
            return acc + transaction.amount;
        }
        return acc;
    }, 0);
    const totalExpense = transactions.reduce((acc, transaction) => {
        if (transaction.type === "expense") {
            return acc + transaction.amount;
        }
        return acc;
    }, 0);
    const netBalance = totalIncome - totalExpense;
    const categoryExpense = transactions.reduce((acc, transaction) => {
        if (transaction.type === "expense") {
            if (!acc[transaction.category]) {
                acc[transaction.category] = 0;
            }
            acc[transaction.category] += transaction.amount;
        }
        return acc;
    }, {});
    let maxExpenseCategory = null;
    let maxExpenseAmount = -1;
    for (const category in categoryExpense) {
        if (categoryExpense[category] > maxExpenseAmount) {
            maxExpenseAmount = categoryExpense[category];
            maxExpenseCategory = category;
        }
    }
    return {
        totalIncome,
        totalExpense,
        netBalance,
        categoryExpense,
        maxExpenseCategory 
}
}
transactions = [
    { type: "income", category: "Salary", amount: 50000, date: "2024-01-01" },
    { type: "expense", category: "Rent", amount: 15000, date: "2024-01-05" },
    { type: "expense", category: "Groceries", amount: 5000, date: "2024-01-10" }
];
console.log(expenseTrackerSummary(transactions));