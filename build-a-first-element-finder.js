function findElement(arr,func) {
  for (let i =0; i<arr.length; i++){
    if (func(arr[i])){
      return arr[i];
    } 
  }
  return undefined;
}
//create a function that looks through an array and returns the first element that passes a test function (also known as a "truth test").
