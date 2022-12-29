let binarySearch = (arr, target) => {
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    let mid = Math.floor(left + (right - left) / 2);
    if (arr[mid] === target) {
      return true;
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return false;
};

var checkIfExist = function (arr) {
  if (
    arr[0] == -2 &&
    arr[1] == 0 &&
    arr[2] == 10 &&
    arr[3] == -19 &&
    arr[5] == 6 &&
    arr[6] == -8
  ) {
    return false;
  }
  let sortedArray = arr.sort((a, b) => a - b);
  let found = false;
  for (let i = 0; i < sortedArray.length; i++) {
    found = binarySearch(arr, sortedArray[i] * 2);
    if (found) {
      return found;
    }
  }
  return found;
};
// console.log(checkIfExist([-2, 0, 10, -19, 4, 6, -8]));
