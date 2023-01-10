// Function Defination
var minSubArrayLen = function (target, nums) {
  let start = 0;
  let end = 1;
  let sum = 0;
  let result = Infinity;

  for (let i = 0; i < nums.length; i++) {
    sum = sum + nums[i];

    while (sum >= target) {
      result = Math.min(result, i - start + 1);
      sum = sum - nums[start++];
    }
  }
  return result === Infinity ? 0 : result;
};

// Driver code
let target = 7;
let nums = [2, 3, 1, 2, 4, 3];
let result = minSubArrayLen(target, nums);
console.log(result);
