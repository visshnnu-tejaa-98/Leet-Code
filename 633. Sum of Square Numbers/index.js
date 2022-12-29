/**
 * @param {number} c
 * @return {boolean}
 */
var judgeSquareSum = function (c) {
  let left = 0;
  let right = Math.floor(Math.sqrt(c));
  while (left <= right) {
    if (left * left + right * right > c) {
      right--;
    } else if (left * left + right * right < c) {
      left++;
    } else {
      return true;
    }
  }
  return false;
};
