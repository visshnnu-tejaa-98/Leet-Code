/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let left = 0;
  let right = _.size(nums) - 1;

  while (left < right - 1) {
    const mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) {
      return mid;
    }

    if (nums[mid] >= nums[left]) {
      if (target >= nums[left] && target <= nums[mid]) {
        right = mid;
      } else {
        left = mid;
      }
    } else {
      if (target >= nums[mid] && target <= nums[right]) {
        left = mid;
      } else {
        right = mid;
      }
    }
  }

  return nums[left] === target ? left : nums[right] === target ? right : -1;
};
