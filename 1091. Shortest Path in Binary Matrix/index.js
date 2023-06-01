/**
 * @param {number[][]} grid
 * @return {number}
 */
var shortestPathBinaryMatrix = function (grid) {
  const m = grid.length;
  const isValid = (i, j) =>
    i >= 0 && j >= 0 && i < m && j < m && grid[i][j] == 0;
  const time = new Array(m).fill(null).map(() => new Array(m).fill(-1));

  const bfs = () => {
    if (grid[0][0] == 1) {
      return;
    }
    const Q = [[0, 0]];
    time[0][0] = 1;
    while (Q.length) {
      let [x, y] = Q.shift();
      let t = time[x][y];

      if (x == m - 1 && y == m - 1) return t;

      for (let i = -1; i <= 1; i++) {
        for (let j = -1; j <= 1; j++) {
          if (i == 0 && j == 0) continue;
          const X = x + i,
            Y = y + j;
          if (isValid(X, Y)) {
            grid[X][Y] = 1;
            Q.push([X, Y]);
            time[X][Y] = t + 1;
          }
        }
      }
    }
  };

  bfs();
  return time[m - 1][m - 1];
};
