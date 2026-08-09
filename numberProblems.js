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
//String approach-->
let numStr = prompt("Enter the number:");
let product = 1;
for (let x of numStr){
    product *= Number(x);
}
console.log("Product of all digits: ",product);
// Math approach-->______________________________________
let n = Number(prompt("Enter the number:"));
let product = 1;

while (n >= 10){
    let unitDigit = n % 10;
    product *= unitDigit;
    n = Math.floor(n/10);
    
}
product *= n;
console.log("Product of all digits",product);
/_________________________________________________________________
// Reverse a number.
//arithmetic approach
let n = Number(prompt("Enter a number: "));
let copyNum = n;
let reversedNum = 0;

while (n >= 10){
    let unitDigit = n % 10;
    reversedNum = (reversedNum * 10) + unitDigit;
    n = Math.floor(n/10);
    
}
reversedNum = (reversedNum * 10) +n;
console.log("Original number: ",copyNum);
console.log("Reversed number", reversedNum);
//(To check Palindrome or not)
// if (numStr === reversed){
//     console.log("Palindrome");
// } else {
//     console.log("Not a Palindrome");
// }
//does not work with numbers ending with 0

// Reverse a number.
//string approach works with 1000 as well
let numStr = prompt("Enter the number: ");
let reversed = "";
for (let i=numStr.length-1; i>=0; i--){
    reversed += Number(numStr[i]);
}
console.log("Original number:",numStr);
console.log("Reversed number:",reversed);
//_______________________________________________________________________
// Check whether a number is a palindrome.
let numStr = prompt("Enter the number: ");
let reversed = "";
for (let i=numStr.length-1; i>=0; i--){
    reversed += Number(numStr[i]);
}
console.log("Original number:",numStr);
console.log("Reversed number:",reversed);

if (numStr === reversed){
    console.log("Palindrome");
} else {
    console.log("Not a Palindrome");
}
/--------------------------------------------------------------------------------

// Find the first digit of a number.
//arithmatic 
let num = Number(prompt("Enter a number:"));
let copyNum = num;
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

let firstDigit = Math.floor(copyNum/Math.pow(10,(digitCount-1)));
console.log("First Digit of the number is: ",firstDigit);
//Works with positive numbers only
//__________________________________________________________________________________________
// Find the largest digit in a number.
// Find the smallest digit in a number.
// Count how many times a particular digit occurs in a number.
