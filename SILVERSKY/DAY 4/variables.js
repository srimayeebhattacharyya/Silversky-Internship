{
  var e = 10;
  let f = 20;
}
console.log(e); // 10
//console.log(f); // ReferenceError: f is not defined
//it is because var is function-scoped and let is block-scoped.
//function scope means that a variable declared with var is accessible throughout the entire function in which it is declared, regardless of block boundaries. In contrast, block scope means that a variable declared with let is only accessible within the block (enclosed by curly braces {}) in which it is declared.
console.log(j);
var j = 5;
console.log(k);
let k = 5;
//internally it happens:
// var k;          // hoisted
// console.log(k); // undefined
// k = 5;
//Hoisting: Hoisting is JavaScript’s default behavior of moving declarations to the top of their scope before code execution.
// It means you can use variables or functions before they are declared — but the behavior depends on how they are declared.
console.log(l); // ❌ ReferenceError
let l = 20;
/*👉 let and const are hoisted but not initialized.
They stay in something called the Temporal Dead Zone (TDZ) until the line where they are defined.
So accessing them before declaration gives an error. */
const z = 10;
z = 20;// ❌ TypeError: Assignment to constant variable.
//In JavaScript, variables declared with const cannot be reassigned. Once a value is assigned to a const variable, it cannot be changed. Attempting to reassign a const variable will result in a TypeError. However, if the const variable holds an object or an array, you can modify the properties of that object or the elements of that array, but you cannot reassign the variable itself to a different value.
const obj = { name: "A" };
obj.name = "B";
console.log(obj);// Output: { name: "B" }
//it is allowed because we are not reassigning the variable 'obj' to a different value, but rather modifying the property 'name' of the object that 'obj' references. The reference to the object remains the same, so it does not violate the immutability of the const variable.
console.log(0 == false);// true
console.log(0 === false);// false
console.log("" == 0);// true
console.log(null == undefined);// true
//when we compare "" and 0 using the loose equality operator (==), JavaScript performs type coercion. The empty string ("") is converted to the number 0, and since 0 is equal to 0, the expression evaluates to true. However, when we use the strict equality operator (===), no type coercion occurs, and since an empty string is not the same type as a number, the expression evaluates to false.
console.log([] == false);// false
// When comparing an empty array ([]) to false using the loose equality operator (==), JavaScript performs type coercion. The empty array is converted to a boolean value, which is true. However, when comparing true to false, the result is false. Therefore, the expression [] == false evaluates to false.