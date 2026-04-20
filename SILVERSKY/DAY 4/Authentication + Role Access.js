// Input:
// username
// password
// role (admin/user)
// Conditions:
// Correct credentials
// Admin → Full Access
// User → Limited Access
const prompt = require('prompt-sync')();

let username = prompt("Enter username: ");
let password = prompt("Enter password: ");

if (username === "admin" && password === "password123") {
    console.log("Login successful! Full Access granted.");
}
else if (username === "user" && password === "user123") {
    console.log("Login successful! Limited Access granted.");
}
else {
    console.log("Invalid credentials. Access denied.");
}
  
