//mutation should return true if the string 
//in the first element of the array contains all of the
//letters of the string in the second element of the array, and false otherwise. 


function mutation(arr) {
  let element1 = arr[0].toLowerCase();
  let element2 =arr[1].toLowerCase();
  for (let i = 0; i< arr[1].length ; i++){
    if (!element1.includes(element2[i])) {
      return false;
    }
  }
  return true;
}
