/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @param {number} d
 * @return {number}
 */
var findTheDistanceValue = function (arr1, arr2, d) {
  let count = 0;
  for (let i = 0; i < arr1.length; i++) {
    let j;
    let innerCount = 0;
    for (j = 0; j < arr2.length; j++) {
      if (Math.abs(arr1[i] - arr2[j]) > d) {
        innerCount++;
      }
    }
    if (innerCount === arr2.length) {
      count++;
    }
  }
  return count;
};
