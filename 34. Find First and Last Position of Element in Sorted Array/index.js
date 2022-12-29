var searchRange = function (nums, target) {
  return [bSearch(nums, target, true), bSearch(nums, target, false)];
};

const bSearch = (A, t, findLowest) => {
  let index = -1;
  let lo = 0;
  let hi = A.length - 1;
  while (lo <= hi) {
    const mid = hi - ~~((hi - lo) / 2);
    if (A[mid] === t) {
      // if findLowest ? continue to left : continue to right
      if (findLowest) {
        hi = mid - 1;
      } else {
        lo = mid + 1;
      }
      index = mid;
    } else if (A[mid] < t) {
      lo = mid + 1;
    } else {
      hi = mid - 1;
    }
  }
  return index;
};
