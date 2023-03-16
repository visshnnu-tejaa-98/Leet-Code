/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function (inorder, postorder) {
  const buildTreeHelper = (inorder, postorder, istart, iend, pstart, pend) => {
    if (istart === iend) {
      return null;
    } else if (pstart === pend) {
      return null;
    }

    const curNodeVal = postorder[pend - 1];

    const inorderSplitOffset = inorder.indexOf(curNodeVal) - istart;

    const leftNode = buildTreeHelper(
      inorder,
      postorder,
      istart,
      istart + inorderSplitOffset,
      pstart,
      pstart + inorderSplitOffset
    );
    const rightNode = buildTreeHelper(
      inorder,
      postorder,
      istart + inorderSplitOffset + 1,
      iend,
      pstart + inorderSplitOffset,
      pend - 1
    );

    return new TreeNode(curNodeVal, leftNode, rightNode);
  };

  return buildTreeHelper(
    inorder,
    postorder,
    0,
    inorder.length,
    0,
    postorder.length
  );
};
