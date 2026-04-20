// Input:
// Loan amount
// Interest rate
// Tenure
// Output:
// Total interest
// Total payable
// (Use simple interest for Day 1 level)
const prompt = require('prompt-sync')();
let loanAmount = Number(prompt("Enter the loan amount: "));
let interestRate = Number(prompt("Enter the annual interest rate (in %): "));
let tenure = Number(prompt("Enter the tenure (in years): "));
let totalInterest = (loanAmount * interestRate * tenure) / 100;
let totalPayable = loanAmount + totalInterest;
console.log("Total Interest:", totalInterest.toFixed(2));
console.log("Total Payable:", totalPayable.toFixed(2));//meaning of total payable is the total amount that the borrower has to pay back to the lender, which includes both the original loan amount and the interest accrued over the tenure of the loan. In this case, it is calculated by adding the total interest to the original loan amount.