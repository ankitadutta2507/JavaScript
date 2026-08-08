// Find the smallest of three numbers.
let num1 = Number(prompt("Enter 1st number:"));
let num2 = Number(prompt("Enter 2nd number:"));
let num3 = Number(prompt("Enter 3rd number:"));

if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
    console.log("Invalid input");
} else {
    let smallest = Math.min(num1, num2, num3);
    console.log(`${smallest} is the smallest`);
}
//without Math.min-->
// if (a <= b && a <= c) {
//     smallest = a;
// } else if (b <= a && b <= c) {
//     smallest = b;
// } else {
//     smallest = c;
// }
//_________________________________________________________________

// Check whether a number is divisible by both 3 and 5.

let n = Number(prompt("Enter a number"));

if (n % 3 === 0 && n % 5 === 0){
    console.log("Divisible by both 3 and 5")
} else {
    console.log("Not divisible by both 3 and 5");
}
//_________________________________________________________________
// Check whether a number is divisible by 5 but not by 10.
let n = Number(prompt("Enter a number"));

if ( n % 5 === 0 && n % 10 !== 0){
    console.log("Number is divisible by 5 but not by 10");
} else {
    console.log("Number does not meet the criteria");
}
