/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
var findSmallestSetOfVertices = function (n, edges) {
  //make 1 array from first index of edge and one set from second index of each edge
  const size = edges.length;
  const first = edges.map((i) => i[0]);
  const second = new Set();
  for (i = 0; i < size; ++i) {
    second.add(edges[i][1]);
  }
  var res = [];
  for (i = 0; i < size; ++i) {
    if (!res.includes(first[i])) {
      if (!second.has(first[i])) {
        res.push(first[i]);
      }
    }
  }
  return res;
};
