/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
  let output = [];

  const findCombinations = (start, combination) => {
    if (combination.length === k) {
      output.push([...combination]);
      return;
    }

    if (combination.length > k) return;

    for (let i = start; i <= n; i++) {
      combination.push(i);
      findCombinations(i + 1, combination);
      combination.pop();
    }
  };

  findCombinations(1, []);

  return output;
};
