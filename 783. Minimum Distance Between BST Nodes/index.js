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
var minDiffInBST = function (root) {
  let result = [];
  const treverser = (node) => {
    if (!node) return;
    result.push(node.val);
    treverser(node.left);
    treverser(node.right);
  };
  treverser(root);

  let min = Infinity;
  for (let i = 0; i < result.length; i++) {
    for (let j = i + 1; j < result.length; j++) {
      let x = Math.abs(result[i] - result[j]);

      if (x < min && result[i] != result[j]) {
        min = x;
      }
    }
  }
  return min;
};
