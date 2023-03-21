/**
 * @param {number[]} nums
 * @return {number}
 */
var zeroFilledSubarray = function (nums) {
  function getOutcome(n) {
    return (n * (n + 1)) / 2;
  }

  let result = 0;
  let count = 0;
  for (const val of nums.values()) {
    if (val === 0) {
      count++;
    } else {
      const outcome = getOutcome(count);
      result += outcome;
      count = 0;
    }
  }
  if (count) {
    const outcome = getOutcome(count);
    result += outcome;
    count = 0;
  }

  return result;
};
