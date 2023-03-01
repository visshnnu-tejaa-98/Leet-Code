/**
 * @param {number[]} nums
 * @return {number[]}
 */
const sortArray = (nums) => {
  for (let i = 0; i < nums.length; i++) {
    let counter = nums[i],
      j;
    for (j = i - 1; j >= 0 && nums[j] > counter; j--) {
      nums[j + 1] = nums[j];
    }
    nums[j + 1] = counter;
  }
  return nums;
};
