/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
  let obj = {};
  let answers = [];
  for (let i = 0; i < nums1.length; i++) {
    if (!obj[nums1[i]]) {
      obj[nums1[i]] = 1;
    } else {
      obj[nums1[i]] = obj[nums1[i]] + 1;
    }
  }

  for (let i = 0; i < nums2.length; i++) {
    if (obj[nums2[i]]) {
      answers.push(nums2[i]);
      obj[nums2[i]] = obj[nums2[i]] - 1;
    }
  }
  return answers;
};
