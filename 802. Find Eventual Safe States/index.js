/**
 * @param {number[][]} graph
 * @return {number[]}
 */
var eventualSafeNodes = function (graph) {
  // 0 - unvisited, 1 - visiting, 2 - visited
  const visit = new Array(graph.length).fill(0);
  const res = [];

  const dfs = (node) => {
    if (visit[node] === 1) return false;
    if (visit[node] === 2) return true;

    visit[node] = 1;

    for (let edge of graph[node]) {
      if (!dfs(edge)) return false;
    }

    visit[node] = 2;

    return true;
  };

  for (let i = 0; i < graph.length; i++) {
    if (dfs(i)) res.push(i);
  }

  return res;
};
