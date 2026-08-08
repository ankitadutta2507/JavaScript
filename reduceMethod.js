// Write a JavaScript program that takes a positive integer n as input and:

// Creates an array containing all integers from 1 to n.
// Calculates the sum of all elements in the array.
// Calculates the product of all elements in the array.
// Prints the array, sum, and product.

let n = Number(prompt("Enter the value of n"));

let arr = [];

for(let i =1; i<=n; i++){
    arr.push(i);
}
console.log(arr);

let sumAll = arr.reduce((acc, curr) => acc + curr, 0);

console.log(sumAll);
let productAll = arr.reduce((acc, curr) => acc * curr, 1);
console.log(productAll);
