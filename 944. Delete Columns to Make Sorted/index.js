// let strs = ["abc", "bce", "cae"];
// let strs = ["cba", "daf", "ghi"];
// let strs = [["a", "b"]];
let strs = ["zyx", "wvu", "tsr"];
var minDeletionSize = function (strs) {
  let output = 0;
  for (let col = 0; col < strs[0].length; col++) {
    for (let row = 1; row < strs.length; row++) {
      if (strs[row][col] < strs[row - 1][col]) {
        output++;
        break;
      }
    }
  }
  return output;
};

console.log(minDeletionSize(strs));
