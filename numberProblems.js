// Find the factorial of a number.
let n = Number(prompt("Enter the number:"));
let fact = 1;

while (n < 0){
    n = Number(prompt("Enter positive number"));
}
for (let num = 1; num <= n; num++){ 
    fact *= num;
}
    
console.log(fact);
//__________________________________________________________________________
// Count the number of digits in a number.

let numStr = prompt("Enter the number: ");
while(isNaN(Number(numStr))){
    numStr = prompt("Enter a valid number:");
}
// console.log(numStr.length);
console.log(Math.abs(Number(numStr)).toString().length);

//using number method.
let num = Number(prompt("Enter the number:"));

num = Math.abs(num);

let digitCount = 0;

if (num === 0) {
    digitCount = 1;
} else {
    while (num > 0) {
        num = Math.floor(num / 10);
        digitCount++;
    }
}

console.log(digitCount);
//will not work for 123.45
//________________________________________________________________________________________
// Find the sum of digits of a number.
//string approach
let numStr = prompt("Enter the number:");
let sum = 0;
for (let i = 0; i < numStr.length; i++){
    sum += Number(numStr[i]);
    // console.log(numStr[i]);
}
console.log(sum);
//DSA approach
let num = Number(prompt("Enter the number:"));
let sum = 0;

num = Math.abs(num);

while (num > 0) {
    sum += num % 10;
    num = Math.floor(num / 10);
}

console.log(sum);
//________________________________________________________________________________________
// Find the product of digits of a number.








// Reverse a number.
// Check whether a number is a palindrome.
// Find the first digit of a number.
// Find the largest digit in a number.
// Find the smallest digit in a number.
// Count how many times a particular digit occurs in a number.
