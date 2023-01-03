let nums = [1];
k = 1;

var topKFrequent = function (nums, k) {
  let heap = [];
  let result = [];
  let obj = {};
  if (nums.length < k) {
    return nums;
  }
  for (let i = 0; i < nums.length; i++) {
    if (!obj[nums[i]]) {
      obj[nums[i]] = 1;
    } else {
      obj[nums[i]] = obj[nums[i]] + 1;
    }
  }
  for (let key in obj) {
    heap.push([key, obj[key]]);
  }
  heap.sort((a, b) => b[1] - a[1]);

  for (let i = 0; i < k; i++) {
    result.push(+heap[i][0]);
  }
  return result;
};
console.log(topKFrequent(nums, k));

// for (var key in obj) {
//   sortedArray.push([key, obj[key]]);
// }

// sortedArray.sort(function (a, b) {
//   return b[1] - a[1];
// });
// sortedArray.forEach(function (item) {
//   sortedObj[item[0]] = item[1];
// });
// console.log(obj);
// console.log(sortedObj);
