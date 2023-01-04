// Function Defination
var isAnagram = function (s, t) {
  let obj = {};
  if (s.length < t.length) {
    return false;
  }
  for (let i = 0; i < s.length; i++) {
    !obj[s[i]] ? (obj[s[i]] = 1) : obj[s[i]]++;
  }
  for (let i = 0; i < t.length; i++) {
    obj[t[i]] && obj[t[i]]--;
  }
  console.log(obj);
  let set = [...new Set(Object.values(obj))];
  console.log(set);
  if (set.length === 1 && set[0] === 0) {
    return true;
  }
  return false;
};

// Driver COde
let s = "a";
let t = "ab";
let result = isAnagram(s, t);
console.log(result);
