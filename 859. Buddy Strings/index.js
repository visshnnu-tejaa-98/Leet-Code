/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var buddyStrings = function (s, goal) {
  let differences = [];
  let sSet = new Set(s);
  for (let i = 0; i < s.length; i++) {
    if (s[i] !== goal[i]) differences.push([s[i], goal[i]]);
  }

  if (s.length !== goal.length) return false;

  if (s === goal) return sSet.size < s.length;

  if (differences.length === 2)
    return differences[0].toString() === differences[1].reverse().toString();

  return false;
};
