// Input:
// Cost price
// Selling price
// Output:
// Profit amount & %
// Loss amount & %
// No profit no loss
const prompt=require('prompt-sync')();  
let costPrice=prompt("Enter the cost price:");
let sellingPrice=prompt("Enter the selling price:");
if(sellingPrice>costPrice){
    let profitAmount=sellingPrice-costPrice;
    let profitPercent=(profitAmount/costPrice)*100;
    console.log("Profit Amount:", profitAmount);
    console.log("Profit Percentage:", profitPercent.toFixed(2)+"%");
}   
else if(sellingPrice<costPrice){
    let lossAmount=costPrice-sellingPrice;
    let lossPercent=(lossAmount/costPrice)*100;
    console.log("Loss Amount:", lossAmount);
    console.log("Loss Percentage:", lossPercent.toFixed(2)+"%");
}
else{
    console.log("No profit no loss");
}