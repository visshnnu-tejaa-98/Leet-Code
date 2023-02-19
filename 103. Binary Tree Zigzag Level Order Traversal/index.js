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
 * @return {number[][]}
 */
var zigzagLevelOrder = function (root) {
  let result = [];
  if (!root) {
    return result;
  }
  let queueLeft = [root];
  let queueRight = [];
  let trigger = 0;
  while (queueLeft.length || queueRight.length) {
    let temp = [];
    if (queueLeft.length) {
      for (let i = queueLeft.length - 1; i >= 0; i--) {
        temp.unshift(queueLeft[i].val);
        queueLeft[i].right && queueRight.push(queueLeft[i].right);
        queueLeft[i].left && queueRight.push(queueLeft[i].left);
      }
      queueLeft = [];
      result.push(temp);
    } else {
      for (let i = 0; i < queueRight.length; i++) {
        temp.push(queueRight[i].val);
        queueRight[i].right && queueLeft.unshift(queueRight[i].right);
        queueRight[i].left && queueLeft.unshift(queueRight[i].left);
      }
      queueRight = [];
      result.push(temp);
    }
  }
  return result;
};
