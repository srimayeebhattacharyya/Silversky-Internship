// Rules:
// Amount > 
// 500 → 5%
// 1000 → 10%
// 5000 → 20%
// Show:
// Original price
// Discount
// Final price
const prompt=require('prompt-sync')();
let amount=prompt("Enter the amount:");
let discount=0;
if (amount<=500){
    discount=amount*0.05;
}
else if(amount>500 && amount<=1000){
    discount=amount*0.1;
}
else if(amount>1000 && amount<=5000){
    discount=amount*0.2;
}
let finalPrice=amount-discount;
console.log("Original Price:", amount);
console.log("Discount:", discount);
console.log("Final Price:", finalPrice);