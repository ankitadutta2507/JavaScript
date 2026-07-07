//Problem 2: Longest Word
//Write a function findLongestWord(sentence) that returns the longest word without using sort().


function findLongestWord(sentence) {
  let words = sentence.split(" ");
  let maxLength = 0;

  for (let word of words) {
    if (word.length > maxLength) {
      maxLength = word.length;
    }
  }

  return maxLength;
}
