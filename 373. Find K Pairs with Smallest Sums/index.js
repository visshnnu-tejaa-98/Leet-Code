/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number[][]}
 */
var kSmallestPairs = function (nums1, nums2, k) {
  //don't allow k to be bigger than the total number of possibilities
  k = Math.min(k, nums1.length * nums2.length);

  let ret = [];

  //heap of sum (priority) -> [nums1Idx, nums2Idx] (element)
  const min = new MinPriorityQueue();

  //api is enqueue(element, priority)
  min.enqueue([0, 0], 0);

  for (let i = 0; i < k; ++i) {
    let cur = min.dequeue();

    let sum = cur.priority;
    let element = cur.element;
    let l = element[0],
      r = element[1];

    //reuse the array we insrted into the heap for the result
    let recycle = element;
    recycle[0] = nums1[recycle[0]];
    recycle[1] = nums2[recycle[1]];
    ret.push(recycle);

    if (l + 1 < nums1.length) {
      if (lessThanOtherParentSum(true, l, r, nums1, nums2, sum)) {
        min.enqueue([l + 1, r], nums1[l + 1] + nums2[r]);
      }
    }
    if (r + 1 < nums2.length) {
      if (lessThanOtherParentSum(false, l, r, nums1, nums2, sum)) {
        min.enqueue([l, r + 1], nums1[l] + nums2[r + 1]);
      }
    }
  }

  return ret;
};

function lessThanOtherParentSum(left, p_l, p_r, nums1, nums2, p_sum) {
  //if the child is on the left or right edge, then there's only
  //one parent. so return true.
  if ((p_l === 0 && !left) || (left && p_r === 0)) {
    return true;
  }

  let p2_l, p2_r;
  if (left) {
    p2_r = p_r - 1;
    p2_l = p_l + 1;
  } else {
    p2_l = p_l - 1;
    p2_r = p_r + 1;
  }

  let sum = nums1[p2_l] + nums2[p2_r];

  if (sum === p_sum) {
    //if the parents are of equal sum, then just pick one.
    return left;
  }

  return p_sum < sum;
}
