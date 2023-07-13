/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function (numCourses, prerequisites) {
  let graph = {};

  for (let [a, b] of prerequisites) {
    if (!graph[a]) graph[a] = [];
    if (!graph[b]) graph[b] = [];

    graph[b].push(a);
  }

  let visiting = new Set();
  let visited = new Set();

  for (let node in graph) {
    if (visited.has(node)) continue;
    if (hasCycle(node)) return false;
  }

  return true;

  function hasCycle(node) {
    if (visiting.has(node)) return true;
    if (visited.has(node)) return false;

    visiting.add(node);

    for (let neighbor of graph[node]) {
      if (hasCycle(neighbor)) return true;
    }

    visiting.delete(node);
    visited.add(node);
    return false;
  }
};
