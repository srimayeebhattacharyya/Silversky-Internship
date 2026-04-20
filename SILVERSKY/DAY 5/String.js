let name = "Riya";
console.log(name.toUpperCase()); // RIYA
console.log(name.toLowerCase()); // riya
let sentence = "Hello World";
console.log(sentence.split(" ")); // ["Hello", "World"]
let str1 = "   Hello   ";
console.log(str1.trim()); // "Hello"
let str2 = "JavaScript is great";
console.log(str2.includes("Script")); // true
console.log(str2.indexOf("is")); // 11
console.log(str2.replace("great", "awesome")); // "JavaScript is awesome"   
console.log(str2.slice(0, 10)); // "JavaScript"
console.log(str2.substring(0, 10)); // "JavaScript"
console.log(str2.charAt(5)); // "S"
console.log(str2.length); // 19
console.log(str2.startsWith("Java")); // true
console.log(str2.endsWith("great")); // true
console.log(str2.repeat(2)); // "JavaScript is greatJavaScript is great"    
console.log(str2.split(" ").reverse().join(" ")); // "great is JavaScript" // splits the string into an array of words, reverses the array, and then joins it back into a string
console.log(str2.split(" ").map(word => word.length)); // [10, 2, 5] // splits the string into an array of words and then maps each word to its length
Number("123"); // 123
Number("abc"); // NaN
parseInt("123"); // 123
parseInt("123abc"); // 123
parseFloat("123.45"); // 123.45
parseFloat("123.45abc"); // 123.45
isNaN("abc"); // true
isNaN("123"); // false
let price = 12.4567;
console.log(price.toFixed(2)); // 12.46
let amount = "1234.567";
console.log(Number(amount).toFixed(2).toLocaleString()); // "1,234.57" // converts the string to a number and then formats it with commas as thousands separators
let date = new Date();
console.log(date.toDateString());// "Tue Feb 17 2026"
