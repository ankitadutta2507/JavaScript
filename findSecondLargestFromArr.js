//Problem 5: Second Largest
//Return the second largest number in an array without using sort().


function findSecondLargest(arr) {
  if (arr.length < 2) return undefined;

  let largest = arr[0];
  let secondLargest = -Infinity;

  for (let element1 of arr) {
    if (element1 > largest) {
      largest = element1;
    }
  }

  for (let element2 of arr) {
    if (element2 < largest && element2 > secondLargest) {
      secondLargest = element2;
    }
  }

  return secondLargest === -Infinity ? undefined : secondLargest;
}
// TODO: Interview Follow-up: Solve this using only one traversal (single loop) while maintaining O(n) time and O(1) space.
