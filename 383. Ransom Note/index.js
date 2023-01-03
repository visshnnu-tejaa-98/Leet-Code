let ransomNote = "a";
let magazine = "b";

var canConstruct = function (ransomNote, magazine) {
  let ransomnote_array = ransomNote.split("");
  let magazine_array = magazine.split("");
  let obj = {};
  for (let i = 0; i < ransomnote_array.length; i++) {
    if (obj[ransomnote_array[i]]) {
      obj[ransomnote_array[i]] += 1;
    } else {
      obj[ransomnote_array[i]] = 1;
    }
  }
  for (let i = 0; i < magazine_array.length; i++) {
    if (obj[magazine_array[i]]) {
      obj[magazine_array[i]] -= 1;
    }
  }
  let values = [...new Set(Object.values(obj))];
  for (let i = 0; i < values.length; i++) {
    if (values[i] !== 0) {
      return false;
    }
  }
  return true;
};

console.log(canConstruct(ransomNote, magazine));
