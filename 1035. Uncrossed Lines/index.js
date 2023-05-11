/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
const maxUncrossedLines = (n1, n2, dp = []) => {
  for (let i = 1; i <= n1.length; i++)
    for (let j = 1, xp = dp.slice(); j <= n2.length; j++)
      if (n1[i - 1] == n2[j - 1]) dp[j] = ~~xp[j - 1] + 1;
      else dp[j] = Math.max(~~dp[j - 1], ~~xp[j]);
  return dp[n2.length];
};
