/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function (n) {
  if (n == 1) return 1;
  return Math.floor((-1 + Math.sqrt(1 + 8 * n)) / 2);
};
