//Problem 1: Sum of Even Numbers
//Write a function sumEvenNumbers(arr) that returns the sum of all even numbers in the array.
//Example: [1,2,3,4,5,6] -> 12

function sumEvenNumbers(arr) {
  let sum = 0;
  for (let i =0; i<arr.length; i++) {
  
    if (arr[i] % 2 === 0) {
      sum += arr[i];
    }
  }
  return sum;
}
sumEvenNumbers([1,2,3,4,5,6,7, 8, 9, 10]);
