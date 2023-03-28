/**
 * @param {number[]} days
 * @param {number[]} costs
 * @return {number}
 */
var mincostTickets = function (days, costs) {
  const lastDay = days[days.length - 1];
  const memo = new Map();
  const set = new Set(days);

  return dp(lastDay);

  function dp(day) {
    if (day <= 0) return 0;
    if (memo.has(day)) return memo.get(day);

    let res;

    if (!set.has(day)) {
      res = dp(day - 1);
    } else {
      res = Math.min(
        dp(day - 1) + costs[0],
        dp(day - 7) + costs[1],
        dp(day - 30) + costs[2]
      );
    }

    memo.set(day, res);

    return res;
  }
};
