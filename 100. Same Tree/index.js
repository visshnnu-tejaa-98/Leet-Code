// Function Defination
var isSameTree = function (p, q) {
  if (p === null && q !== null) return false;
  if (p !== null && q === null) return false;
  if (p === q) return true;
  if (p.val !== q.val) return false;
  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};

let p = [1, 2, 3];
let q = [1, null, 3];
let result = isSameTree(p, q);
console.log(result);
