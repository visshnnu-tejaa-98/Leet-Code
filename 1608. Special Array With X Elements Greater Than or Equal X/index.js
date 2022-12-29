/**
 * @param {number[]} nums
 * @return {number}
 */
var specialArray = function (nums) {
  nums.sort((a, b) => a - b);
  let index = 1;
  while (index <= nums[nums.length - 1]) {
    let num = 0;
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] >= index) {
        num++;
      }
    }
    if (num === index) {
      return index;
    }
    index++;
  }
  return -1;
};
