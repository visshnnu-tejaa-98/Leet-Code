let word = "FLag";

var detectCapitalUse = function (word) {
  let firstLetter = word.slice(0, 1).toUpperCase();
  let remainingWord = word.slice(1, word.length + 1).toLowerCase();
  if (word === word.toUpperCase()) return true;
  if (word === word.toLowerCase()) return true;
  if (word === firstLetter + remainingWord) return true;
  return false;
};

console.log(detectCapitalUse(word));
