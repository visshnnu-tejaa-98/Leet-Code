/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubarraySumCircular = function (A) {
  if (A.length == 1) return A[0];
  let maxS = A[0];
  let curMax = A[0];
  let minS = A[0];
  let curMin = A[0];
  let sum = A[0];

  for (let i = 1; i < A.length; i++) {
    curMax = Math.max(A[i] + curMax, A[i]);
    maxS = Math.max(curMax, maxS);
    curMin = Math.min(A[i] + curMin, A[i]);
    minS = Math.min(curMin, minS);

    /*curMax = (A[i]+curMax> A[i])?A[i]+curMax: A[i]; //this was not faster
    if (curMax>maxS) maxS = curMax;
    curMin = (A[i]+curMin< A[i])?A[i]+curMin: A[i];
    if (curMin<minS) minS = curMin;
    */

    sum += A[i];
  }
  return sum == minS ? maxS : Math.max(maxS, sum - minS);
};
