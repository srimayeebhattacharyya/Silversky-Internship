let a = 10;
let b = 5;

console.log(a + b); // 15
console.log(a - b); // 5
console.log(a * b); // 50
console.log(a / b); // 2
console.log(a % b); // 0
console.log(a ** b); // 100000
let c = 20;
console.log(a > b); // true
console.log(a < b); // false
console.log(a >= b); // true
console.log(a <= b); // false
console.log(a == b); // false
console.log(a === b); // false
// In JavaScript, the '==' operator checks for value equality, while the '===' operator checks for both value and type equality.Here, since 'a' and 'b' are both numbers but have different values, 'a == b' is false and 'a === b' is also false.
console.log(a != b); // true
console.log(a !== b); // true
// The '!=' operator checks for value inequality, while the '!==' operator checks for both value and type inequality. Since 'a' and 'b' are different values, 'a != b' is true and 'a !== b' is also true.
let d = '10';
console.log(a == d); // true
console.log(a === d); // false (because 'a' is a number and 'd' is a string)
console.log(a != d); // false (because 'a' and 'd' are considered equal in value because a=10 and d='10' are equal in value when using '==')
console.log(a !== d); // true (because 'a' and 'd' are not equal in type or value beacause a=10 is a number and d='10' is a string)
//Logical Operators 
let x = true;
let y = false; 
console.log(x && y); // false (logical AND)
console.log(x || y); // true (logical OR)
console.log(!x); // false (logical NOT)
console.log(!y); // true (logical NOT)
console.log(a^b); // 15 (bitwise XOR)
console.log(a & b); // 0 (bitwise AND)
console.log(a | b); // 15 (bitwise OR)  
console.log(a << 1); // 20 (left shift) 
//in case of left shift operator (<<) we are shifting the bits of 'a' to the left by 1 position, which is equivalent to multiplying 'a' by 2. So, 10 shifted left by 1 becomes 20.
console.log(a >> 1); // 5 (right shift)    
//in case of right shift operator (>>), we are shifting the bits of 'a' to the right by 1 position, which is equivalent to dividing 'a' by 2 and discarding the remainder. So, 10 shifted right by 1 becomes 5.
console.log(a >>> 1); // 5 (unsigned right shift)
// The unsigned right shift operator (>>>) shifts the bits of 'a' to the right by 1 position, filling the leftmost bit with 0. Since 'a' is a positive number, the result is the same as the regular right shift (>>), which is 5.
//for example if a=-2 then in binary representation it is represented as 11111111 11111111 11111111 11111110 (in 32-bit signed integer representation). When we apply the unsigned right shift operator (>>>) to -2, it shifts the bits to the right and fills the leftmost bit with 0, resulting in 01111111 11111111 11111111 11111111, which is equal to 2147483647 in decimal. So, if 'a' were -2, 'a >>> 1' would yield 2147483647 instead of 5.
console.log(a & 1); // 0 (bitwise AND with 1, checks if 'a' is even or odd)
console.log(a | 1); // 11 (bitwise OR with 1, sets the least significant bit to 1)
console.log(a ^ 1); // 11 (bitwise XOR with 1, toggles the least significant bit)
console.log(a << 2); // 40 (left shift by 2, equivalent to multiplying by 4)
console.log(a >> 2); // 2 (right shift by 2, equivalent to dividing by 4 and discarding the remainder)
console.log(a >>> 2); // 2 (unsigned right shift by 2, similar to right shift for positive numbers so answer is 2)
