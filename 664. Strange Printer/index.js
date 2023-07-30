/**
 * @param {string} s
 * @return {number}
 */
function strangePrinter(s) {
  const n = s.length;
  const dp = [];

  for (let i = n - 1; i >= 0; i--) {
    dp[i] = [];
    dp[i][i] = 1;

    for (let j = i + 1; j < n; j++) {
      if (s[i] === s[j]) {
        dp[i][j] = dp[i][j - 1];
      } else {
        let min = Infinity;
        for (let k = i; k < j; k++) {
          min = Math.min(min, dp[i][k] + dp[k + 1][j]);
        }
        dp[i][j] = min;
      }
    }
  }

  return dp[0][n - 1];
}
