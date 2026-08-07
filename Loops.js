//Comment out all other codes while running a particular solution to avoid similar namimng convention
// 19. Print numbers from 1 to 100.

for (let i=1; i<=100; i++){
    console.log(i);
}
//_____________________________________________________________________________________________________
// 20. Print numbers from 100 to 1.

for (let i=100; i>=1; i--){
    console.log(i);
}
//_____________________________________________________________________________________________________
// 21. Print all even numbers from 1–100.
for (let i=1; i<=100; i++){
    if (i % 2 ===0 ){
        console.log(i);
    }
}
//_____________________________________________________________________________________________________
// 22. Print all odd numbers from 1–100.

for(let i=1; i<=100; i++){
    if (i % 2 !==0){
        console.log(i);
    }
}
//_____________________________________________________________________________________________________
// 23. Find the sum of numbers from 1 to N.
//It is a program to sum first N numbers starting from 1.
let n = Number(prompt("Enter the value of N:"));
let sum = 0;

for(let i =1; i<=n; i++){
    sum +=i;
}
console.log(`sum of numbers from 1 to ${n} is ${sum}`);
//_____________________________________________________________________________________________________
// 24. Find the factorial of N.
// if you want N! then Enter N in the input.
let n = Number(prompt("Enter the value of N"));
let sum = 1;

for (let i=1; i<=n; i++){
    sum *= i;
}
console.log(`Factorial of ${n} is ${sum}`);
//_____________________________________________________________________________________________________
// 25. Print the multiplication table of a number.

let n = Number(prompt("Which number's multiplication table do you want?"));
console.log(`Multiplication Table of ${n}`);
for (let i = 1; i<=20; i++){
    console.log(`${n} * ${i} = ${n * i}`);
}
//_____________________________________________________________________________________________________
// 26. Count the number of digits in a number.
let n = Number(prompt("Enter a number: "));
let count = 0;

while (n >= 10) {
    count++;
    n = Math.floor(n / 10);
}

console.log(`Total digits present: ${count + 1}`);
//_______________________________________________________________________________________________________
// 27. Reverse a number.
// Solution will not work for numbers ending with zero/s, and -ve numbers
let n = Number(prompt("Enter the number:"));
console.log(n);
let reversedNum = 0;

do {
    reversedNum = reversedNum * 10 + (n % 10);
    n = Math.floor(n / 10);
} while (n > 0);

console.log(`Reversed number is ${reversedNum}`);
//_______________________________________________________________________________________________________
// 28. Find the sum of digits.

let n = Number(prompt("Enter the number:"));
console.log("You number is",n)
n = Math.abs(n);

let sum = 0;

while (n > 0) {
    let unitDigit = n % 10;
    sum += unitDigit;
    n = Math.floor(n / 10);
}

console.log("Sum of digits is", sum);
//_______________________________________________________________________________________________________
// 29. Check whether a number is a palindrome.

let n = Number(prompt("Enter the number:"));
console.log("Your number is ",n);
let temp = n;
let reversedNum = 0;

do {
    reversedNum = reversedNum * 10 + (temp % 10);
    temp = Math.floor(temp / 10);
} while (temp > 0);

console.log(`Reversed number is ${reversedNum}`);

if (n === reversedNum ){
    console.log("Palindrome");
} else {
    console.log("Not a Palindrome");
}
//_______________________________________________________________________________________________________
// 30. Check whether a number is prime.

let n = Number(prompt("Enter the number to check prime or not:"));
let isPrime = true;
if (n < 2) {
    isPrime = false;
} else {
    for (let i=2; i<n; i++){
        if (n % i === 0){
            isPrime = false;
            break;
        } 
    }
}
if (isPrime){
    console.log(`${n} is prime`);
} else {
    console.log(`${n} is not prime`);
}

