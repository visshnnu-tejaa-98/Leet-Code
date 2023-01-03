let words = ["i", "love", "leetcode", "i", "love", "coding"];

let k = 3;

var topKFrequent = function (words, k) {
  let heap = [];
  let result = [];
  let obj = {};
  if (words.length < k) {
    return words;
  }
  for (let i = 0; i < words.length; i++) {
    if (!obj[words[i]]) {
      obj[words[i]] = 1;
    } else {
      obj[words[i]] = obj[words[i]] + 1;
    }
  }
  for (let key in obj) {
    heap.push([key, obj[key]]);
  }
  let sortedkeys = Object.keys(obj).sort();
  let sortedkeysbyvalue = Object.values(sortedkeys).sort(
    (a, b) => obj[b] - obj[a]
  );

  for (let i = 0; i < k; i++) {
    result.push(sortedkeysbyvalue[i]);
  }
  return result;
};

console.log(topKFrequent(words, k));
