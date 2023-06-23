/**
 * @param {number[]} nums
 * @return {number}
 */
var longestArithSeqLength = function (nums) {
  const { length: size } = nums;
  const dp = Array(size)
    .fill("")
    .map((_) => []);
  let result = 0;

  for (let a = 1; a < size; a++) {
    const num = nums[a];

    for (let b = 0; b < a; b++) {
      const diff = num - nums[b] + 500;

      dp[a][diff] = (dp[b][diff] ?? 0) + 1;
      result = Math.max(result, dp[a][diff]);
    }
  }
  return result + 1;
};
