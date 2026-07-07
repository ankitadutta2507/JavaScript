//Problem 3: Remove Falsy Values
//Return a new array with all falsy values removed. Do not modify the original array.


function removeFalsyValues (arr) {
  let resultArr = [];
  for ( let element of arr ){
    if ( Boolean(element) === true ){
      resultArr.push(element);
    }
  }
  return resultArr;
}

let arr = [0,"",6,false,null,undefined,NaN,78,4,5];
removeFalsyValues(arr);
