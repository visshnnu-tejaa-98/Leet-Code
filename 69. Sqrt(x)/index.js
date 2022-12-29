/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  let left = 1;
  let right = x;
  while (left <= right) {
    let mid = Math.floor(left + (right - left) / 2);
    if (mid * mid < x) {
      left = mid + 1;
    } else if (mid * mid > x) {
      right = mid - 1;
    } else {
      return mid;
    }
  }
  return left - 1;
};
