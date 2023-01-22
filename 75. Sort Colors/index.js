var sortColors = function (nums) {
  let i = 0;
  let j = nums.length - 1;
  let curr = 0;

  while (curr <= j) {
    if (nums[curr] === 2) {
      [nums[curr], nums[j]] = [nums[j], nums[curr]];
      j--;
    } else if (nums[curr] === 0) {
      [nums[curr], nums[i]] = [nums[i], nums[curr]];
      i++;
      curr++;
    } else if (nums[curr] === 1) {
      curr++;
    }
  }
  return nums;
};

let array = [2, 1, 2];
let result = sortColors(array);
console.log(result);
