/**
 * @param {string} s
 * @return {number}
 */
var longestPalindromeSubseq = function (st) {
  var dp = [];

  function findLPSLengthRecursive(st, startIndex, endIndex) {
    if (startIndex > endIndex) return 0;

    // every sequence with one element is a palindrome of length 1
    if (startIndex === endIndex) return 1;

    dp[startIndex] = dp[startIndex] || [];

    if (typeof dp[startIndex][endIndex] === "undefined") {
      // case 1: elements at the beginning and the end are the same
      if (st[startIndex] === st[endIndex]) {
        dp[startIndex][endIndex] =
          2 + findLPSLengthRecursive(st, startIndex + 1, endIndex - 1);
      } else {
        // case 2: skip one element either from the beginning or the end
        let c1 = findLPSLengthRecursive(st, startIndex + 1, endIndex);
        let c2 = findLPSLengthRecursive(st, startIndex, endIndex - 1);
        dp[startIndex][endIndex] = Math.max(c1, c2);
      }
    }

    return dp[startIndex][endIndex];
  }

  return findLPSLengthRecursive(st, 0, st.length - 1);
};
