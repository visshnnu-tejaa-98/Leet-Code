var majorityElement = function (nums) {
  let majorityCount = Math.floor(nums.length / 2);
  let obj = {};
  for (let i = 0; i < nums.length; i++) {
    if (!obj[nums[i]]) {
      obj[nums[i]] = 1;
    } else {
      obj[nums[i]] = obj[nums[i]] + 1;
    }
  }
  for (let key in obj) {
    if (obj[key] > majorityCount) {
      return key;
    }
  }
};
