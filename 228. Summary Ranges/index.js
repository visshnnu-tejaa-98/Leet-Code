/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function (nums) {
  let arr = [];
  let res = [];
  for (let j = 0; j < nums.length; j++) {
    if (nums[j] + 1 === nums[j + 1]) {
      arr.push(nums[j]);
    } else if (nums[j] + 1 !== nums[j + 1] && nums[j] === nums[j - 1] + 1) {
      arr.push(nums[j]);
      res.push(arr);
      arr = [];
    } else {
      res.push(nums[j]);
    }
  }
  for (let j = 0; j < res.length; j++) {
    if (Array.isArray(res[j])) {
      res[j] = `${res[j][0]}->${res[j][res[j].length - 1]}`;
    } else {
      res[j] = `${res[j]}`;
    }
  }
  return res;
};
