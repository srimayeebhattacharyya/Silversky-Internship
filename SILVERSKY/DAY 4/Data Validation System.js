// Validate:
// Email contains “@”
// Password length > 8
// Age between 18–60
// Return specific validation errors.
const prompt = require('prompt-sync')();
let email = prompt("Enter your email: ");
let password = prompt("Enter your password: ");
let age = Number(prompt("Enter your age: "));
let isValid = true;
if (!email.includes("@")) {
    console.log("Invalid email: must contain '@'");
    isValid = false;
}
if (password.length <= 8) {
    console.log("Invalid password: must be longer than 8 characters");
    isValid = false;
}
if (age < 18 || age > 60) {
    console.log("Invalid age: must be between 18 and 60");
    isValid = false;
}
if (isValid) {
    console.log("All validations passed.");
}