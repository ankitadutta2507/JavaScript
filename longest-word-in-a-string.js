function findLongestWordLength(string) {
  let maxLength = 0;

  for (const word of string.split(" ")) {
    if (word.length > maxLength) {
      maxLength = word.length;
    }
  }

  return maxLength;
}
