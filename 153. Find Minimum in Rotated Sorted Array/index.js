/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (arr) {
  if (!arr || !Array.isArray(arr)) {
    return;
  }
  if (Array.isArray(arr) && !arr.length) {
    return;
  }
  min = 0;
  max = arr.length - 1;

  while (min <= max) {
    mid = Math.floor((min + max) / 2);
    if (arr[mid] < arr[max]) {
      max = mid;
    } else {
      if (mid + 1 < arr.length) {
        min = mid + 1;
      } else {
        return arr[mid];
      }
    }
  }
  return arr[mid];
};
