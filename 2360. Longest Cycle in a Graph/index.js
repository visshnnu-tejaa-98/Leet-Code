/**
 * @param {number[]} edges
 * @return {number}
 */
var longestCycle = function (edges) {
  let ans = -1;

  const alreadyProcessedNodes = new Array(edges.length);
  const startСhainNode = new Array(edges.length);
  const serialNumberNode = new Array(edges.length);

  main: for (let i = 0; i < edges.length; i++) {
    let curr = i;
    let pos = 0;
    while (!alreadyProcessedNodes[curr]) {
      alreadyProcessedNodes[curr] = true;
      startСhainNode[curr] = i;
      serialNumberNode[curr] = pos;
      pos++;
      curr = edges[curr];
      if (curr === -1) continue main;
    }
    if (startСhainNode[curr] === i)
      ans = Math.max(ans, pos - serialNumberNode[curr]);
  }

  return ans;
};
