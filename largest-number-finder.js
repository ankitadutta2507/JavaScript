function largestOfAll(arrays) {
  let arrayLargestNum = [];
  for (let array of arrays) {
    let maxNumber = array[0];
    for (let element of array) {
      if (element > maxNumber ) {
        maxNumber = element;
      }
    }
    arrayLargestNum.push(maxNumber);
  }
  return arrayLargestNum;
}
//an array consisting of the largest number from each provided sub-array.
