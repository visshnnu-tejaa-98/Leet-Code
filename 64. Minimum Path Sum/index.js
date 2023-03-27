/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {
  function gett(x, y) {
    if (x < 0 || y < 0) return Infinity;
    return grid[x][y];
  }
  grid.forEach((col, x) => {
    col.forEach((e, y) => {
      if (x == 0 && y == 0) return;
      grid[x][y] += Math.min(gett(x - 1, y), gett(x, y - 1));
    });
  });
  return grid[grid.length - 1][grid[0].length - 1];
};
