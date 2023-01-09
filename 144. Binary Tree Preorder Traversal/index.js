// Function Defination
var preorderTraversal = function (root) {
  let result = [];

  traversal(root);

  function traversal(root) {
    if (root === null) {
      return result;
    } else {
      result.push(root.val);
      traversal(root.left);
      traversal(root.right);
    }
  }
};

// Driver Code
let root = [1, null, 2, 3];
let result = preorderTraversal(root);
console.log(result);
