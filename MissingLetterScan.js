//You should have a function named fearNotLetter.
//The fearNotLetter function should accept one argument: a string representing a range of letters in alphabetical order which can have one letter missing.
//The function should find the missing letter in the passed letter range and return it.
//If all letters are present in the range, the function should return undefined.
function fearNotLetter(string) {
  for (let i =0; i<string.length-1; i++) {
    let currentLetter = string[i].charCodeAt(0);
    let nextLetter = string[i+1].charCodeAt(0);
    if (nextLetter !== currentLetter+1){
      return String.fromCharCode(currentLetter+1);
    } 
  }
  return undefined;
}
