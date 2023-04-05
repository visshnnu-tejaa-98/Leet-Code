/**
 * @param {number[]} nums
 * @return {number}
 */
var minimizeArrayValue = function (nums) {
  let ans = -Infinity;
  let sum = 0;

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    const current = Math.ceil(sum / (i + 1));
    ans = Math.max(ans, current);
  }

  return ans;
};
