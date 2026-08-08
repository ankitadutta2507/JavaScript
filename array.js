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
// //Start with both as very small values.
// Go through the array one number at a time.
// If the current number is greater than largest, move the old largest into secondLargest, then make the current number largest.
// Otherwise, if the current number is greater than secondLargest but smaller than largest, update secondLargest.
// After the loop, secondLargest contains the second-largest number.
let arr = [23, 35, 47, 51, 60, 76];

let largest = -Infinity;
let secondLargest = -Infinity;

for (let num of arr) {
    if (num > largest) {
        secondLargest = largest;
        largest = num;
    } else if (num > secondLargest && num !== largest) {
        secondLargest = num;
    }
}

console.log("Second largest number is:", secondLargest);
//______________________________________________________________________________
// 50.Remove duplicate values.

let arr = [25, 92, 37, 92, 92, 25, 33];
let newArr = [];

for (let num of arr){
    if (!newArr.includes(num)){
        newArr.push(num);
    }
}
console.log(newArr);
//________________________________________________________________________________
// 51. Find duplicate values.
let arr = [25, 92, 37, 92, 92, 25, 33];
let newArr = [];
let duplicateValues = [];
for (let num of arr){
    if (!newArr.includes(num)){
        newArr.push(num);
    } else if (!duplicateValues.includes(num)){
        duplicateValues.push(num);
    }
}
console.log(duplicateValues);
/___________________________________________________________________________________
// 52. Merge two arrays.

let fruits = ["apple" , "banana", "cherry"];
let veggies = ["cabbage", "potato", "carrot"];

// let shoppingList = fruits.concat(veggies);
// console.log(shoppingList);
//merge with duplicates


for (let item of veggies){
    if (!fruits.includes(item)){
        fruits.push(item);
    }
}
//merge without duplicates
console.log(fruits);
/___________________________________________________________________________________
// 53.Find common elements between two arrays.

let GuestList1 = ["Ram", "Sam", "Jodu", "Mina"];
let GuestList2 = ["Mina", "Tina", "Rina", "Sam"];
let commonList = [];

for (let guest of GuestList1){
    if (GuestList2.includes(guest)){
        commonList.push(guest);
    }
}
console.log(commonList);
//__________________________________________________________________________________________
// 54. Find elements that exist in one array but not another.

let empUsernames1 = ["johndoe", "janedoe", "asmith", "mjohnson", "kpatel", "emilyr", "davidk"];
let empUsernames2 = ["robertc","sjenkins","asmith", "emilyr","davidk","ahassan","janedoe"];

let uniqueUsernames1 = [];
let uniqueUsernames2 = [];

for (let name of empUsernames1){
  if (!empUsernames2.includes(name)){
    uniqueUsernames1.push(name);
  }
}

for (let name of empUsernames2){
  if (!empUsernames1.includes(name)){
    uniqueUsernames2.push(name);
  }
}

console.log("Unique usernames of list 1", uniqueUsernames1 );
console.log("Unique usernames of list 2", uniqueUsernames2 );
//__________________________________________________________________________________________
// 55. Rotate an array left by one position.

let arr = [23, 35, 47, 51, 60, 76];

arr.push(arr.shift());
console.log(arr);
