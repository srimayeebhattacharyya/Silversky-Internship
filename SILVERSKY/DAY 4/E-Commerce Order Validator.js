// Check:
// Product price > 0
// Stock available
// User balance sufficient
// Return:
// Order placed
// Out of stock
// Insufficient balance
const prompt=require('prompt-sync')();
let productPrice=Number(prompt("Enter the product price:"));
let stockAvailable=Number(prompt("Enter the stock available:"));
let userBalance=Number(prompt("Enter your balance:"));
if(productPrice<=0){
    console.log("Product price must be greater than 0.");
}
else if(stockAvailable<=0){
    console.log("Out of stock");
}
else if(userBalance<productPrice){
    console.log("Insufficient balance");
}
else{
    console.log("Order placed");
}