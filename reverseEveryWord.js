//Problem 4: Reverse Every Word
//Reverse each word in a sentence while keeping the word order unchanged.


function reverseEveryWord(sentence) {
  let arr = sentence.split(" ");
  let newSentence ="";
  
  for (let element of arr) {
    let reversedWord = "";
    for ( let i = element.length-1; i>=0; i--) {
    reversedWord += element[i];
    }
    newSentence = newSentence + reversedWord + " ";
  }
  return newSentence;
}
reverseEveryWord("I am improving my coding skills");
