/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  if (matrix.length == 0) {
    return [];
  }
  let result = [];
  let rowStart = 0;
  let rowEnd = matrix.length - 1;
  let colStart = 0;
  let colEnd = matrix[0].length - 1;
  while (true) {
    // top
    for (let i = colStart; i <= colEnd; i++) {
      result.push(matrix[rowStart][i]);
    }
    rowStart++;
    if (rowStart > rowEnd) {
      return result;
    }
    // right
    for (let i = rowStart; i <= rowEnd; i++) {
      result.push(matrix[i][colEnd]);
    }
    colEnd--;
    if (colEnd < colStart) {
      return result;
    }
    // bottom
    for (let i = colEnd; i >= colStart; i--) {
      result.push(matrix[rowEnd][i]);
    }
    rowEnd--;
    if (rowEnd < rowStart) {
      return result;
    }
    // left
    for (let i = rowEnd; i >= rowStart; i--) {
      result.push(matrix[i][colStart]);
    }
    colStart++;
    if (colStart > colEnd) {
      return result;
    }
  }
  return result;
};
console.log(
  spiralOrder([
    [2, 3, 4],
    [5, 6, 7],
    [8, 9, 10],
    [11, 12, 13],
    [14, 15, 16],
  ])
);
console.log(spiralOrder([[7], [9], [6]]));
console.log(
  spiralOrder([
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
  ])
);
console.log(
  spiralOrder([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);
