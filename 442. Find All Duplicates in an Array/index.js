// Function Defination
var findDuplicates = function (nums) {
  let result = [];
  for (let i = 0; i < nums.length; i++) {
    let index = Math.abs(nums[i]) - 1;
    if (nums[index] < 0) {
      result.push(Math.abs(nums[i]));
    } else {
      nums[index] = -nums[index];
    }
  }
  return result;
};

// Driver Code
let nums = [4, 3, 2, 7, 8, 2, 3, 1];
let result = findDuplicates(nums);
console.log(result);
