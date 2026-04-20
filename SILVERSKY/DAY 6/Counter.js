// ❓ Build a Counter Class (with Private State)
// Create a class:
// class Counter {}
// Requirements:
// 1️⃣ It should start from 0 by default.
// 2️⃣ It should have methods:
// increment() → increases count by 1
// decrement() → decreases count by 1
// getValue() → returns current count
// 3️⃣ The internal count must not be directly accessible from outside.
// This should NOT work:
// const c = new Counter();console.log(c.count); // ❌ should be undefined 
// Expected Usage:
// const counter = new Counter();
// counter.increment();
// counter.increment();
// counter.decrement();
// console.log(counter.getValue()); // 1
//Access modifiers:
//1. Public: Accessible from anywhere (default in JavaScript) denoted like example for count here this.count=0; 
//2. Private: Accessible only within the class (using # syntax).
//3. Protected: Not natively supported in JavaScript, but can be simulated using naming conventions (e.g., _count) or using closures.
//4. Static: Accessible on the class itself, not on instances of the class.
class Counter{
    #count;
    constructor(){
        this.#count=0;
    }
    increment(){
        this.#count++;
    }
    decrement(){
        this.#count--;
    }
    getValue(){
        return this.#count;
    }
}
const counter=new Counter();
counter.increment();
counter.increment();
counter.decrement();
console.log(counter.getValue());
