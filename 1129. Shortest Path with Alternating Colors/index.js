/**
 * @param {number} n
 * @param {number[][]} redEdges
 * @param {number[][]} blueEdges
 * @return {number[]}
 */
function shortestAlternatingPaths(n, red, blue) {
  const blueMap = new Map();
  for (const [origin, destination] of blue) {
    if (!blueMap.has(origin)) blueMap.set(origin, []);
    blueMap.get(origin).push(destination);
  }
  const redMap = new Map();
  for (const [origin, destination] of red) {
    if (!redMap.has(origin)) redMap.set(origin, []);
    redMap.get(origin).push(destination);
  }
  let blueQueue = [0];
  let redQueue = [0];
  const sol = new Array(n);
  let level = 0;
  const blueVisited = new Array(n);
  const redVisited = new Array(n);
  while (redQueue.length || blueQueue.length) {
    const nextBlueQueue = [];
    const nextRedQueue = [];
    for (const v of blueQueue) {
      if (sol[v] === undefined) sol[v] = level;
      if (!blueVisited[v]) {
        blueVisited[v] = 1;
        const destinations = blueMap.get(v) || [];
        for (const dest of destinations) {
          nextRedQueue.push(dest);
        }
      }
    }
    for (const v of redQueue) {
      if (sol[v] === undefined) sol[v] = level;
      if (!redVisited[v]) {
        redVisited[v] = 1;
        const destinations = redMap.get(v) || [];
        for (const dest of destinations) {
          nextBlueQueue.push(dest);
        }
      }
    }
    blueQueue = nextBlueQueue;
    redQueue = nextRedQueue;
    level++;
  }
  for (let i = 0; i < sol.length; i++) {
    if (sol[i] === undefined) sol[i] = -1;
  }
  return sol;
}
