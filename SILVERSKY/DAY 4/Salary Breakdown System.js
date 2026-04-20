let baseSalary = 50000;
let hraPercent = 20;
let taxPercent = 10;
if (baseSalary <= 0) {
    console.log("Base salary must be greater than 0.");
} 
else if (hraPercent < 0 || taxPercent < 0) {
    console.log("Percentages cannot be negative.");
} 
else {
    let hraAmount = baseSalary * (hraPercent / 100);
    let taxAmount = baseSalary * (taxPercent / 100);
    let finalSalary = baseSalary + hraAmount - taxAmount;
    console.log("Base Salary:", baseSalary);
    console.log("HRA Amount:", hraAmount);
    console.log("Tax Amount:", taxAmount);
    console.log("Final In-hand Salary:", finalSalary);
}