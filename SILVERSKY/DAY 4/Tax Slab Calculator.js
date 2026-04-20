// Example:
// Income < 2.5L → 0%
// 2.5L–5L → 5%
// 5L–10L → 20%
// 10L → 30%
// Output total tax + net income.
const income = prompt("Enter your income: ");
let taxPercent;
if (income < 250000) {
    taxPercent = 0;
}
else if (income >250000 && income <= 500000) {
    taxPercent = 0.05;
}
else if (income > 500000 && income <= 1000000) {
    taxPercent= 0.20;
}
else {
    taxPercent = 0.30;
}
const tax = taxPercent * income;
const netIncome = income - (tax);
console.log(`Total tax: ${tax}`);
console.log(`Net income: ${netIncome}`);