/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[]}
 */

let binarySearch = (array) => {
  let left = 0;
  let right = array.length - 1;
  while (left <= right) {
    let mid = Math.floor(left + (right - left) / 2);
    if (array[mid] === 0) {
      right = mid - 1;
    } else {
      if (array[mid + 1] === 0) {
        return mid + 1;
      } else {
        left = left + 1;
      }
    }
  }
  return right + 1;
};

var kWeakestRows = function (mat, k) {
  let arr = [];
  for (let i = 0; i < mat.length; i++) {
    let obj = {};
    obj["index"] = i;
    obj["value"] = binarySearch(mat[i]);
    arr.push(obj);
  }
  arr.sort((a, b) => a.value - b.value);
  let result = arr.map((i) => i.index);
  return result.slice(0, k);
};
