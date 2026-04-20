let arr = [1, 2, 3];
arr.push(4);
console.log(arr);  // [1, 2, 3, 4]
arr.pop();
console.log(arr);  // [1, 2, 3]
arr.unshift(0);
console.log(arr);  // [0, 1, 2, 3]
arr.shift();
console.log(arr);  // [1, 2, 3]
arr.splice(1, 0, 1.5);
console.log(arr);  // [1, 1.5, 2, 3] // formula: splice(start, deleteCount, item1, item2, ...)
//deleteCount means how many elements to delete starting from index 'start' and item1, item2, ... are the elements to add at index 'start'
let slicedArr = arr.slice(1, 3);
console.log(slicedArr);  // [1.5, 2] // formula: slice(start, end) - end is exclusive
let index = arr.indexOf(2);
console.log(index);  // 2
let includes = arr.includes(3);
console.log(includes);  // true // checks if the array includes the specified element
let length = arr.length;
console.log(length);  // 4
arr.forEach(element => {
    console.log(element);  // prints each element in the array //  o/p: 1, 1.5, 2, 3
});
//map
let mappedArr = arr.map(element => element * 2);
console.log(mappedArr);  // [2, 3, 4, 6] // creates a new array with the results of calling a provided function on every element in the calling array
let mapped1=arr.map(ele=>ele+23)
console.log(mapped1);  // [24, 24.5, 25, 26]
//filter
let filteredArr = arr.filter(element => element > 1);
console.log(filteredArr);  // [1.5, 2, 3] // creates a new array with all elements that pass the test implemented by the provided function
let filtered1=arr.filter(ele=>ele%2==0)
console.log(filtered1);  // [2] // filters out the even numbers from the array
//reduce
let sum1 = arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum1);  // 7.5 // executes a reducer function on each element of the array, resulting in a single output value
//accumulator means simply the total sum and currentValue means the current element being processed in the array
//Array is: 1 1.5 2 3
//0 0+1=1 1+1.5=2.5 2.5+2=4.5 4.5+3=7.5
let cart = [
  { name: "Shirt", price: 1000 },
  { name: "Shoes", price: 2000 },
  { name: "Cap", price: 500 }
];
let total=cart.reduce((acc, item) => acc + item.price, 0);
console.log(total);  // 3500 // calculates the total price of items in the cart
marks=[23,45,67,89,90]
let res=marks.filter(mark=>mark>=50)
             .map(mark=>mark+5)
             .reduce((acc, mark) => acc + mark, 0);
console.log(res);  // 306 // filters out marks greater than or equal to 50, adds 5 to each of those marks, and then sums them up