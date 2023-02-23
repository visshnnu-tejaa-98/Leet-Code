/**
 * @param {number} k
 * @param {number} w
 * @param {number[]} profits
 * @param {number[]} capital
 * @return {number}
 */
var findMaximizedCapital = function (k, W, Profits, Capital) {
  const indexes = Profits.map((_, i) => i).sort(
    (ia, ib) => Profits[ib] - Profits[ia]
  );
  while (k > 0) {
    const chosen = indexes.findIndex((i) => Capital[i] <= W);
    if (chosen === -1) return W;
    W = W + Profits[indexes[chosen]];
    indexes.splice(chosen, 1);
    k--;
  }
  return W;
};
