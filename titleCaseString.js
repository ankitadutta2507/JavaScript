function titleCase(string) {
  let resultArr = [];
  let words = string.split(" ");

  for (let word of words) {
    let wordTitleCase = word[0].toUpperCase() + word.slice(1).toLowerCase();
    resultArr.push(wordTitleCase);
  }

  return resultArr.join(" ");
}
