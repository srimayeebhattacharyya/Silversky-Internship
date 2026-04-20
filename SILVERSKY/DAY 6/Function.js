// function calculateDiscount(price, percent) {
//     return price - (price * percent / 100);
// }
const calculateDiscount = (price, percent) =>
    price - (price * percent / 100);
console.log(calculateDiscount(100, 20)); // 80
const processNumbers = (arr, operation) => {
    return arr.map(operation);
};
console.log(processNumbers([1,2,3], x => x * 2));
// [2,4,6]
function customFilter(arr, condition) {
    const result = [];
    
    for (let item of arr) {
        if (condition(item)) {
            result.push(item);
        }
    }
    
    return result;
}

// Example:
console.log(customFilter([1,2,3,4], x => x > 2));
// [3,4]
let x = 5;

function test() {
    let x = 10;
    console.log(x);
}

test();
console.log(x);
// if (true) {
//     let y = 50;
// }
// console.log(y);
//gives error because y is block scoped and not accessible outside the if block.
function greet(name, callback) {
    console.log("Hello " + name);
    callback();
}

function sayBye() {
    console.log("Goodbye!");
}

greet("Srimayee", sayBye);
console.log("-------------------");
// Anonymous function example
setTimeout(function() {
    console.log("This message is displayed after 2 seconds");
}, 2000);
