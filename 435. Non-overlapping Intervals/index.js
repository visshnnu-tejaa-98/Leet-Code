/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function (intervals) {
  if (intervals.length < 2) return 0;
  intervals.sort((a, b) => a[0] - b[0]);
  let count = 0,
    last_included = 0;
  for (let i = 1; i < intervals.length; ++i) {
    if (intervals[i][0] < intervals[last_included][1]) {
      count++;
      if (intervals[i][1] < intervals[last_included][1]) last_included = i;
    } else last_included = i;
  }
  return count;
};
