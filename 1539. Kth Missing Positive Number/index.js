/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
let findKthPositive = (A, K) => {
  let seen = new Set(A);
  for (let i = 1; ; ++i) if (!seen.has(i) && !--K) return i;
};
