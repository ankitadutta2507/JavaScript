// 41. Find the largest number in an array.
let arr = [2,3,4,5,8, 18];
let largestNum = arr[0];
for (let num of arr){
    if (num > largestNum) {
        largestNum = num;
    }
}
console.log("Largest number: ",largestNum);
//____________________________________________________________________________________
// 42. Find the smallest number.
let arr = [ 34, 67, 82, 33, 100, 27];
let smallestNum = arr[0];

for ( let num of arr){
    if (num < smallestNum) {
            smallestNum = num;
    }
}
console.log("The smallest number is: ",smallestNum);
//____________________________________________________________________________________
// 43. Calculate the sum of an array.
let arr = [ 34, 67, 82, 33, 100, 27];
let sum = 0;
for (let num of arr){
    sum += num;
}
console.log("Summation of all numbers", sum);
//______________________________________________________________________________________
// 44. Calculate the average.
let arr = [23, 61, 83, 96, 29, 35];
let sum = 0;
for (let num of arr) {
    sum += num;
    
}
console.log("Average of all numbers:",sum/arr.length);
//______________________________________________________________________________________
// 45. Count even numbers.
let arr = [23, 62, 83, 96, 28, 35];
let count = 0;
for ( let num of arr){
    if (num % 2 === 0){
        count++;
    }
}
console.log("Count of even numbers on your array ", count);
//______________________________________________________________________________________________
// 46. Count odd numbers.

let arr = [23, 62, 83, 97, 28, 35];
let count = 0;
for (let num of arr){
    if (num % 2 !== 0){
        count++;
    }
}
console.log("Count of odd numbers on your array is ",count);
//______________________________________________________________________________________________
// 47. Reverse an array without using reverse().

let arr = [23, 62, 83, 97, 28, 35];
let reversedArr = [];

for (let index = arr.length-1 ; index >=0 ; index--){
    reversedArr.push(arr[index]);
}
console.log("Reversed array: ",reversedArr);
//______________________________________________________________________________________________
// 48. Find whether an element exists in an array
let arr = [23, 62, 83, 97, 28, 35];
let n = Number(prompt("Which value you want to search for?"));
if (arr.includes(n)){
    console.log("Array includes ",n);
} else {
    console.log("Array does not include ",n);
}
// without includes()---
let arr = [23, 62, 83, 97, 28, 35];
let n = Number(prompt("Which value do you want to search for?"));

let found = false;

for (let num of arr) {
    if (num === n) {
        found = true;
        break;
    }
}

if (found) {
    console.log("Array includes", n);
} else {
    console.log("Array does not include", n);
}
//______________________________________________________________________________

// 49. Find the second-largest number.
// 50.Remove duplicate values.
// 51. Find duplicate values.
// 52. Merge two arrays.
// 53.Find common elements between two arrays.
// 54. Find elements that exist in one array but not another.
// 55. Rotate an array left by one position.
