/**
 * @param {number} n
 * @param {number} k
 * @param {number} row
 * @param {number} column
 * @return {number}
 */
var knightProbability = function (n, k, row, column) {
  //simpler to just store the array flat
  let dp = new Float64Array(k * (n * n));

  return dfs(dp, n, k, row, column) / 8 ** k;
};

function dfs(dp, n, k, i, j, ret) {
  // if we're out of bounds then 0 wins on this branch
  if (i >= n || j >= n || i < 0 || j < 0) {
    return 0;
  }
  //we won!
  if (k <= 0) {
    return 1;
  }

  //could also do dp[k][i][j]
  let dpIdx = i * n + j + n * n * k;
  if (dp[dpIdx] > 0) {
    return dp[dpIdx];
  }

  //try all 8 directions
  let sum =
    dfs(dp, n, k - 1, i + 1, j + 2, ret) +
    dfs(dp, n, k - 1, i + 1, j - 2, ret) +
    dfs(dp, n, k - 1, i + 2, j + 1, ret) +
    dfs(dp, n, k - 1, i + 2, j - 1, ret) +
    dfs(dp, n, k - 1, i - 1, j + 2, ret) +
    dfs(dp, n, k - 1, i - 1, j - 2, ret) +
    dfs(dp, n, k - 1, i - 2, j + 1, ret) +
    dfs(dp, n, k - 1, i - 2, j - 1, ret);

  dp[dpIdx] = sum;
  return sum;
}
