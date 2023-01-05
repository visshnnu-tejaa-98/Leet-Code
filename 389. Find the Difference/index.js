// Function Defination
var findTheDifference = function (s, t) {
  let obj = {};
  for (let i = 0; i < s.length; i++) {
    !obj[s[i]] ? (obj[s[i]] = 1) : obj[s[i]]++;
  }
  for (let i = 0; i < t.length; i++) {
    if (obj[t[i]]) {
      obj[t[i]] = obj[t[i]] - 1;
    } else {
      return t[i];
    }
  }
};

// Driver code
let s = "a";
let t = "aa";
let result = findTheDifference(s, t);
console.log(result);
