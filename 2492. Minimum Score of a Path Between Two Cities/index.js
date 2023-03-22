/**
 * @param {number} n
 * @param {number[][]} roads
 * @return {number}
 */
var minScore = function (n, roads) {
  const map = new Map();
  for (const [a, b, d] of roads) {
    if (!map.has(a)) map.set(a, []);
    if (!map.has(b)) map.set(b, []);
    map.get(a).push([b, d]);
    map.get(b).push([a, d]);
  }
  // search
  const queue = [1];
  const visited = {};
  visited[1] = true;
  let min = Infinity;
  while (queue.length > 0) {
    const node = queue.shift();
    if (map.has(node)) {
      for (const [next, d] of map.get(node)) {
        min = Math.min(d, min);
        if (!visited[next]) {
          visited[next] = true;
          queue.push(next);
        }
      }
    }
  }
  return min === Infinity ? -1 : min;
};
