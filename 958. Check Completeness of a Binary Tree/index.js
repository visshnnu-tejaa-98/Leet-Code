/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isCompleteTree = function (root) {
  let nodes = [[root, 1]],
    i = 0;
  while (i < nodes.length) {
    const node = nodes[i][0],
      v = nodes[i][1];
    if (node) {
      nodes.push([node.left, 2 * v]);
      nodes.push([node.right, 2 * v + 1]);
    }
    i += 1;
  }
  return nodes[nodes.length - 1][1] === nodes.length;
};
