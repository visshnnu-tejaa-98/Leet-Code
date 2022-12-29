/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function (isBadVersion) {
  return function (n) {
    return bs(1, n);
  };
  function bs(left, right) {
    var mid = Math.floor((left + right) / 2);
    if (left === right) return left;
    return isBadVersion(mid) ? bs(left, mid) : bs(mid + 1, right);
  }
};
