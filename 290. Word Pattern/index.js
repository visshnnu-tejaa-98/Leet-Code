let pattern = "jquery";
let s = "jquery";
var wordPattern = function (pattern, s) {
  let obj = {};
  let p = pattern.split("");
  let string = s.split(" ");
  let set = new Set();
  if (p.length !== string.length) {
    return false;
  }
  for (let i = 0; i < string.length; i++) {
    if (!obj[p[i]]) {
      obj[p[i]] = string[i];
      set.add(string[i]);
      if (set.size !== Object.keys(obj).length) {
        return false;
      }
    } else {
      if (obj[p[i]] !== string[i]) {
        return false;
      }
    }
  }
  return true;
};

console.log(wordPattern(pattern, s));
