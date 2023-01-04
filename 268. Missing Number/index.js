// Function Defination
var missingNumber = function (nums) {
  let sum = 0;
  let total = 0;
  for (let i = 0; i < nums.length; i++) {
    sum = sum + nums[i];
    total = total + i + 1;
  }
  return total - sum;
};

// Driver Code
// let nums = [1];
let nums = [3, 0, 1];
let result = missingNumber(nums);
console.log(result);
