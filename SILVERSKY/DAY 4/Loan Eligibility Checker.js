const prompt = require('prompt-sync')(); 
// Conditions:
// Age must be ≥ 21
// Salary ≥ 25000
// Credit score ≥ 700
// Print:
// Eligible
// Not Eligible (with reason)
let age=prompt("Enter your age:");
let salary=prompt("Enter your salary:");
let creditScore=prompt("Enter your credit score:");
if(age>=21 && salary>=25000 && creditScore>=700){
    console.log("Eligible for loan");
}
else{
    if(age<21){
        console.log("Not Eligible for loan: Age must be at least 21.");
    }       
    if(salary<25000){
        console.log("Not Eligible for loan: Salary must be at least 25000.");
    }   
    if(creditScore<700){
        console.log("Not Eligible for loan: Credit score must be at least 700.");
    }
}
