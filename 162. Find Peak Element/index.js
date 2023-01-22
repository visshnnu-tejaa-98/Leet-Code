var findPeakElement = function (nums) {
  let left = 0;
  let right = nums.length - 1;
  while (left < right) {
    let mid = Math.floor(left + (right - left) / 2);
    if (nums[mid] > nums[mid + 1]) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }
  return right;
};

let nums = [1, 2, 1, 3, 5, 6, 4];
let result = findPeakElement(nums);
console.log(result);
