let marks = 80;

if (marks >= 90) {
  console.log("A Grade");
} else if (marks >= 75) {
  console.log("B Grade");
} else {
  console.log("C Grade");
}
//ternary operator
let age = 18;
let result = (age >= 18) ? "Adult" : "Minor";
console.log(result);
//switch statement
let day = 3;

switch (day) {  
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;  
    case 4:
        console.log("Thursday");
        break;  
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;                  
    default:
        console.log("Invalid day");
}
