/**
 * @param {string} s
 * @return {string}
 */
var removeStars = function (s) {
  const stackArr = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "*" && stackArr.length) {
      stackArr.pop();
    } else {
      stackArr.push(s[i]);
    }
  }
  return stackArr.join("");
};
