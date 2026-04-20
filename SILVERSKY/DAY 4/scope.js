// Types of Scope in JavaScript
// 1️⃣ Global Scope

// A variable declared outside any function or block.
let i = 10;
function test() {
  console.log(i); // 10
}
test(); // 10
// 👉 Accessible everywhere in the program.

// 2️⃣ Function Scope

// Variables declared inside a function are only accessible inside that function.
function test() {
  let t = 20;
  console.log(t);
}
test();       // 20
console.log(t); // ❌ ReferenceError
// 👉 Outside the function, it doesn’t exist.

// 3️⃣ Block Scope

// Variables declared with let or const inside {} are only accessible inside that block.

if (true) {
  let o = 30;
  const p = 40;
}
console.log(o); // ❌ Error
console.log(p); // ❌ Error
// 👉 Block scope works in:

// if statements

// loops

// switch

// any {}

// Important Difference: var vs let
if (true) {
  var s = 100;
}
console.log(s); // 100
// Because var is function-scoped, NOT block-scoped. So, even though s is declared inside the if block, it is accessible outside the block. In contrast, if we had used let instead of var, s would not be accessible outside the block and would result in a ReferenceError.

// Primitive vs Reference Types
// 🔹 Primitive Types (Stored by Value)

// These store the actual value directly in memory.

// string
// number
// boolean
// undefined
// null
// bigint
// symbol
// Example:
let q = 10;
let u = q ;
u = 20;
console.log(q); // 10
// 👉 Changing u does NOT affect q.

// 🔹 Reference Types (Stored by Reference)
// Objects {}
// Arrays []
// Functions
// They store a reference (memory address).
// let obj1 = { name: "John" };
// let obj2 = obj1;
// obj2.name = "Mike";
// console.log(obj1.name); // "Mike"
// 👉 Both point to the same memory.

//Why typeof null is "object"?
// typeof null // "object"
// This is a historical bug in JavaScript.
// In early JS versions:
// Values were stored with a type tag
// Objects had type tag 0
// null was represented as 0
// So JavaScript mistakenly treated null as an object.
// It was never fixed because it would break old websites.