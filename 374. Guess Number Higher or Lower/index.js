/**
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function (n) {
  let low = 1;
  let high = n;
  let result = low + (high - low) / 2;
  let guessNum = 0;
  while ((guessNum = guess(result)) != 0) {
    if (guessNum > 0) {
      low = result + 1;
    } else {
      high = result - 1;
    }
    result = low + (high - low) / 2;
  }
  return result;
};
