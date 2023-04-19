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
 * @return {number}
 */
var longestZigZag = function (root, prev, len) {
  if (!root) return len;
  return Math.max(
    longestZigZag(root.left, "l", prev === "r" ? len + 1 : 0),
    longestZigZag(root.right, "r", prev === "l" ? len + 1 : 0)
  );
};
