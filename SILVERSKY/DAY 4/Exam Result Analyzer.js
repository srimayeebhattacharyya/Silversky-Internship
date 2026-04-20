// Input marks for:
// Math
// Science
// English
// Conditions:
// Any subject < 35 → Fail
// Otherwise calculate average
// Grade based on average
const prompt = require('prompt-sync')();

let mathMarks = Number(prompt("Enter marks for Math: "));
let scienceMarks = Number(prompt("Enter marks for Science: "));
let englishMarks = Number(prompt("Enter marks for English: "));

if (mathMarks < 35 || scienceMarks < 35 || englishMarks < 35) {
    console.log("Fail");
}
else {
    let average = (mathMarks + scienceMarks + englishMarks) / 3;
    console.log("Average Marks:", average.toFixed(2));

    if (average >= 90) {
        console.log("Grade: A");
    }
    else if (average >= 75) {
        console.log("Grade: B");
    }
    else {
        console.log("Grade: C");
    }
}
