// NOTE: Comment out all other questions before running one, as multiple questions may use the same variable names.
// 9. Check whether a number is positive, negative, or zero.

let num = Number(prompt("Enter the number:"));
if (num===0){
    console.log("Number is zero");
} else if(num > 0){
    console.log("Number is positive");
} else if (num < 0) {
    console.log("Number is negative");
} else {
    console.log("You entered an invalid number");
}
//*****************************************************************************************************
// 10. Check whether a number is even or odd.
let num = Number(prompt("Enter a number: "));
if (num % 2 ===0){
    console.log("Your number is even");
} else {
    console.log("Your number is odd");
}
//*****************************************************************************************************
// 11. Find the larger of two numbers.
let num1 = Number(prompt("Enter the first number:"));
let num2 = Number(prompt("Enter the second number:"));
if (num1 > num2){
    console.log(`First number ${num1} is greater than second number ${num2}`);
} else if (num1 < num2) {
    console.log(`Second number ${num2} is greater than first number ${num1}`);
} else {
    console.log("Both numbers are equal");
}
//*****************************************************************************************************
// 12. Find the largest of three numbers.
let num1 = Number(prompt("Enter the first number:"));
let num2 = Number(prompt("Enter the second number:"));
let num3 = Number(prompt("Enter the third number:"));

if (num1 >= num2 && num1 >= num3) {
    console.log(`${num1} is the largest number`);
} else if (num2 >= num1 && num2 >= num3) {
    console.log(`${num2} is the largest number`);
} else {
    console.log(`${num3} is the largest number`);
}
//*****************************************************************************************************
// 13. Check whether someone is eligible to vote.
let age = Number(prompt("Enter your age:"));
if (age >= 18){
    console.log("You are eligible to vote");
} else if (age > 0){
    console.log(`You have to wait for ${18-age} years to vote`);
} else {
    console.log("Age is invalid");
}
//*****************************************************************************************************
// 14. Check whether a year is a leap year.

let year = Number(prompt("Enter the year:"));
if (year % 4 === 0 && year % 100 !== 0){
    console.log("Leap year");
} else if (year % 400 ===0){
    console.log("Leap Year");
} else {
    console.log("Not a leap year");
}
//*****************************************************************************************************
// 15. Check whether a number is divisible by 5 and 11.

let num = Number(prompt("Enter a number:"));
if (num % 5 ===0 && num % 11 ===0){
    console.log("Entered number is divisible by 5 and 11");
} else {
    console.log("Entered number is not divisible by 5 and 11");
}
//*****************************************************************************************************
// 16. Create a basic grade calculator.
let totalMarks = Number(prompt("Enter your total marks:"));
let subjects = Number(prompt("How many subjects did you appear for:"));
let avgMarks = totalMarks / subjects;
if (avgMarks >= 90){
    console.log("Your Grade is A");
} else if (avgMarks >= 80){
    console.log("Your Grade is B");
} else if (avgMarks >= 70){
    console.log("Your Grade is C");
} else if (avgMarks >= 60){
    console.log("Your Grade is D");
} else if (avgMarks >= 50){
    console.log("Your Grade is F");
} else {
    console.log("Sorry! You need to appear again");
}
//*****************************************************************************************************
// 17. Create a simple calculator using if...else.

let num1 = Number(prompt("Enter first number"));
let num2 = Number(prompt("Enter second number"));
let operator = prompt("Operation you want to perform(+, -, *, /): ");


if (operator ==="+"){
    console.log(`${num1} ${operator} ${num2} is ${num1+num2}`);
} else if (operator ==="-"){
    console.log(`${num1} ${operator} ${num2} is ${num1-num2}`);
} else if (operator ==="*"){
    console.log(`${num1} ${operator} ${num2} is ${num1*num2}`);
} else if (operator ==="/"){
    if (num2 === 0){
        console.log("Can not divide by zero")
    } else {
        console.log(`${num1} ${operator} ${num2} is ${num1/num2}`);
    }
} else {
    console.log("You entered some invalid input")
}
//*****************************************************************************************************
// 18. Check whether a character is a vowel or consonant.

let char = prompt("Enter your character: ");
char = char.toLowerCase();
if (char >= 'a' && char <= 'z'){
    if (char === "a" || char === "e" ||char === "i" ||char === "o" ||char === "u"){
        console.log("The character is a vowel");
    } else {
        console.log("The character is a consonant")
    }
} else {
    console.log("You have entered an invalid character");
}

