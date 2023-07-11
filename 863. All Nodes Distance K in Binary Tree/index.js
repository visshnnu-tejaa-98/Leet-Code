/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} target
 * @param {number} k
 * @return {number[]}
 */
var distanceK = function (root, target, k) {
  function dfs(node, parent) {
    if (!node) return;
    node.parent = parent;
    dfs(node.left, node);
    dfs(node.right, node);
  }
  dfs(root, null);

  let queue = [target];
  const seen = new Set();
  seen.add(target);
  const output = [];

  const neighbors = ["left", "right", "parent"];
  let dist = 0;
  while (queue.length) {
    const nextQueue = [];
    for (let i = 0; i < queue.length; i++) {
      const node = queue[i];

      if (dist === k) {
        output.push(node.val);
        continue;
      }

      for (const neighborKey of neighbors) {
        if (node[neighborKey] && !seen.has(node[neighborKey])) {
          seen.add(node[neighborKey]);
          nextQueue.push(node[neighborKey]);
        }
      }
    }

    queue = nextQueue;
    dist++;
  }

  return output;
};
