// Write a function that checks whether a number is prime.
function checkPrime(num) {
    if (num < 2) {
        return false;
    }

    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }

    return true;
}

let n = Number(prompt("Enter the number to check prime or not"));
console.log(checkPrime(n));
//_______________________________________________________________________________________________________
// Write a function that returns the factorial.

function factorial(num) {
    let fact = 1;
    for (let i = 1; i<=num; i++) {
        fact *= i;
    }
    return fact;
}

let n = Number(prompt("Enter a number:"));
factorial(n);
//_______________________________________________________________________________________________________
// Write a function that returns the largest element of an array.

function findLargest(arr){
    let largestNum = arr[0];
    for (let num of arr){
    if (num > largestNum) {
        largestNum = num;
    }
}
console.log(`Largest number of [${arr}] is ${largestNum}`);
}

let noOfElements = Number(prompt("Enter how many elements of array do you want?"));
let arr = [];

while (arr.length < noOfElements){
    let newElement = Number(prompt(`Add Element ${arr.length+1}:`));
    arr.push(newElement);
    
}
findLargest(arr);
//_______________________________________________________________________________________________________
// Write a function that accepts an array and returns only even numbers.

function filterEvens(array){
    let evenArray =[];
    for (let num of array){
        if (num % 2 === 0){
            evenArray.push(num);
        }
    }
    return evenArray;
}
let csvString = prompt("Enter all the array items separated by comma");
const array = csvString.split(",").map(Number);
console.log(filterEvens(array));
//_______________________________________________________________________________________________________
// Write a function that accepts a string and returns the number of vowels.
let str = prompt("Enter a string of your choice").toLowerCase();

function countVowels(string) {
    let vowelCount = 0;

    for (let letter of string) {
        if (
            letter === "a" ||
            letter === "e" ||
            letter === "i" ||
            letter === "o" ||
            letter === "u"
        ) {
            vowelCount++;
        }
    }

    return vowelCount;
}

console.log(countVowels(str));
