// What to Cover:
// - For Loops
// - While Loops
// - Do While Loops
//- for each loops
// - break and continue
// -Loops with Arrays
// -Loops with Objects

// 1.Print numbers 1–20
// Skip multiples of 3
// Stop at 15

for (let i = 1; i <=20; i++) {
    if(i%3==0){
        continue;
    }
    if (i>15){
        break;
    }
    console.log(i);
}
console.log("-------------------");
//2️⃣ Print numbers from 20 to 1 (reverse).
let i=20;
for (i;i>=1;i--){
    console.log(i);
}
console.log("-------------------");
// 3️⃣ Print all even numbers between 1 and 50.
for (i=1;i<=50;i++){
    if(i%2==0){
        console.log(i);
    }
}
console.log("-------------------");
// 4️⃣ Print sum of numbers from 1 to 100.
let sum=0;
for(i=1;i<=100;i++){
    sum+=i;
}
console.log(sum);
console.log("-------------------");
// 5️⃣ Print multiplication table of a number (user input).
let num=prompt("Enter a number to see its multiplication table: ");
for(i=1;i<=10;i++){
    console.log(num*i);
}
console.log("-------------------");
// 6️⃣ Print numbers from 1 to 50.Stop the loop when number reaches 27 using break.
for(i=1;i<=50;i++){
    if(i==27){
        break;
    }
    console.log(i);
}
console.log("-------------------");
// 7️⃣Using while, print factorial of a number.
let fact=1;
num=prompt("Enter a number to see its factorial: ");
i=1;
while(i<=num){
    fact*=i;
    i++;
}
console.log("Factorial of "+num+" "+"is"+" "+fact);
console.log("-------------------");
// 8️⃣Using do-while, ask user to enter a number until they enter a positive number.
do{
    num=prompt("Enter a positive number: ");
}while(num<0);  
console.log("Thank you for entering a positive number: "+num);
console.log("-------------------");
/*1️⃣1️⃣ Print this pattern:
*
**
***
****
*****
*/
for(let i=1;i<=5;i++){
    let row="";
    for(let j=1;j<=i;j++){
        row+="*";
    }
    console.log(row);
}
console.log("-------------------");
// 1️⃣2️⃣Print multiplication tables from 1 to 5.
for(i=1;i<=5;i++){
    console.log("Multiplication Table of "+i);
    for(let j=1;j<=10;j++){
        console.log(i*j);
    }
}
console.log("-------------------");
// 1️⃣3️⃣Print this number pyramid:
// 1
// 12
// 123
// 1234
// 12345
for (i=1;i<=5;i++){
    let row="";
    for(let j=1;j<=i;j++){
        row+=j;
    }
    console.log(row);
}
console.log("-------------------");
// 1️⃣4️⃣Count how many digits are in a number.
num=prompt("Enter a number to count its digits: ");
let count=0;
while(num>0){
    count++;
    num=Math.floor(num/10);
}
console.log("Number of digits: "+count);
console.log("-------------------");
// 1️⃣5️⃣Print all prime numbers between 1 and 100.
for(i=2;i<=100;i++){
    let isPrime=true;
    for(let j=2;j<=Math.sqrt(i);j++){
        if(i%j==0){
            isPrime=false;
            break;
        }   
    }
    if(isPrime){
        console.log(i);
    }
}
console.log("-------------------");
// 1️⃣6️⃣Print Fibonacci series up to n terms (user input).
num=prompt("Enter the number of terms for Fibonacci series: ");
let num1=0,num2=1;
console.log("Fibonacci Series: ");
for(i=1;i<=num;i++){
    console.log(num1);
    next=num1+num2;
    num1=num2;
    num2=next;
}
console.log("-------------------");
// 1️⃣7️⃣Reverse a number using loop.
num=prompt("Enter a number to reverse: ");//35456
let reversed=0;
while(num>0){
    reversed=reversed*10+(num%10);//0*10+6=6 -> 6*10+5=65 -> 65*10+4=654 -> 654*10+5=6545 -> 6545*10+3=65453
    num=Math.floor(num/10);//3545 -> 354 -> 35 -> 3 -> 0
}
console.log("Reversed number: "+reversed);
console.log("-------------------");
// 1️⃣8️⃣Check if a number is palindrome
num=prompt("Enter a number to check if it's a palindrome: ");
let ori=num;
let reverse=0;
while(num>0){
    reverse=reverse*10+(num%10);//0*10+6=6 -> 6*10+5=65 -> 65*10+4=654 -> 654*10+5=6545 -> 6545*10+3=65453
    num=Math.floor(num/10);//3545 -> 354 -> 35 -> 3 -> 0
}
if(ori==reverse){
    console.log("The number is a palindrome.");
}else{
    console.log("The number is not a palindrome.");
}
console.log("-------------------");
// 1️⃣9️⃣Print all the factors of a number.
num=prompt("Enter a number to find its factors: ");
for (let i=1;i<=num;i++){
    if(num%i==0){
        console.log(i);
    }   
}
