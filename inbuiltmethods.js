function filterNumbers(arr) {
  return arr.filter(element => (typeof element === "number"));
}

function reverseArray(arr) {
  return arr.reverse();
}

function findMax(arr) {
  return Math.max(...arr);
}

function removeDuplicates(arr) {
  return Array.from(new Set(arr));
}

function flattenArray(arr) {
  return arr.flat(Infinity);  
}
