/**
 * @param {number} n
 * @param {number[][]} roads
 * @return {number}
 */
var maximalNetworkRank = function (n, roads) {
  let graph = Array.from({ length: n }, () => Array(n).fill(0));
  let degreeCount = Array(n).fill(0);
  for (let i of roads) {
    graph[i[0]][i[1]] = 1;
    graph[i[1]][i[0]] = 1;
    degreeCount[i[0]]++;
    degreeCount[i[1]]++;
  }
  let maxi = 0;
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      let count = degreeCount[i] + degreeCount[j];
      if (graph[i][j] === 1) count--;
      maxi = Math.max(maxi, count);
    }
  }
  return maxi;
};
