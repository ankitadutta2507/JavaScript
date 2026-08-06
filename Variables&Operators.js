// ***********NOTE: Comment out all other questions before running one, as multiple questions may use the same variable names.********


// 1. Print your name and age.
let name= prompt("Please enter your name: ");
let age = Number(prompt("Please enter your age: "));
console.log(`Your name is ${name} and your age is ${age}`);
//------------------------------------------------------------------------------------
//2. Add two numbers.
let num1 = Number(prompt("Enter the first number: "));
let num2 = Number(prompt("Enter the second number: "));
let sumResult = num1 + num2;
console.log(`${num1} + ${num2} is ${sumResult}`);
//------------------------------------------------------------------------------------
// 3. Calculate the area of a rectangle.
let length = Number(prompt("Enter the length of the rectangle"));
let width = Number(prompt("Enter the width of the rectangle"));
let area = length * width;
console.log("Area of the rectangle is: ", area);
//------------------------------------------------------------------------------------
// 4. Convert Celsius to Fahrenheit.
let tempC = Number(prompt("Enter the temperature in Celsius:"));
let tempF = (tempC * 9 / 5 ) + 32 ;
console.log("Temperature in Fahrenheit is: ",tempF);
//------------------------------------------------------------------------------------
// 5. Calculate simple interest.
let principal = Number(prompt("How much is your Principal amount:"));
let interestRate = Number(prompt("Enter rate of interest:"));
let years = Number(prompt("Enter the number of year you want to invest:"));
let interest = (principal * interestRate * years) / 100;
console.log("Interest earned: ",interest);
//------------------------------------------------------------------------------------
// 6. Swap two variables.
let num1 = Number(prompt("Enter the first number: "));
let num2 = Number(prompt("Enter the second number: "));

console.log(`First number before swap is ${num1} and second number before swap is ${num2}`);

let tempVariable = num1;
num1 = num2;
num2 = tempVariable;

console.log(`First number after swap is ${num1} and second number after swap is ${num2}`);
//------------------------------------------------------------------------------------
// 7. Find the remainder of two numbers.

let num1 = Number(prompt("Enter the first number: "));
let num2 = Number(prompt("Enter the second number: "));

let remainder = num1 % num2;

console.log(`${num1} % ${num2} is ${remainder}`);
//------------------------------------------------------------------------------------
// 8. Convert minutes into hours and minutes.
let minutes = Number(prompt("How many minutes have passed: "));
let hours = Math.floor(minutes / 60);
let remainingMinutes  = minutes % 60;

console.log(`It's been ${hours} hours and ${remainingMinutes } minutes`);

