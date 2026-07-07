function chunkArrayInGroups(arr, number) {
  let resultArr = [];

  for (let i = 0; i < arr.length; i += number) {
    resultArr.push(arr.slice(i, i + number));
  }

  return resultArr;
}
//Splits an array into smaller arrays (chunks) of a specified size. * Starting from index 0, 
//the function repeatedly takes `number` * of elements using `slice()`, 
//moves forward by `number` positions, * and stores each chunk in a new array.
