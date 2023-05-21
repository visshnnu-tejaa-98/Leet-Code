/**
 * @param {number[][]} grid
 * @return {number}
 */
const DFS = (grid, i, j) => {
  grid[i][j] = 2;
  // top
  if (i > 0 && grid[i - 1][j] === 1) DFS(grid, i - 1, j);
  // right
  if (j < grid[0].length - 1 && grid[i][j + 1] === 1) DFS(grid, i, j + 1);
  // bottom
  if (i < grid.length - 1 && grid[i + 1][j] === 1) DFS(grid, i + 1, j);
  // right
  if (j > 0 && grid[i][j - 1] === 1) DFS(grid, i, j - 1);
};

const BFS = (grid, i, j) => {
  let cnt = 0;
  let queue = [[i, j, cnt]];
  while (queue.length !== 0) {
    let [i, j, cnt] = queue[0];
    queue.shift();
    if (grid[i][j] === 1) {
      // target land
      return cnt;
    } else if (grid[i][j] === 0) {
      // water
      grid[i][j] = -1;
      cnt++;
    } else if (grid[i][j] === -1) {
      // already visited water
      continue;
    }
    // top
    if (i > 0 && (grid[i - 1][j] === 0 || grid[i - 1][j] === 1))
      queue.push([i - 1, j, cnt]);
    // right
    if (
      j < grid[0].length - 1 &&
      (grid[i][j + 1] === 0 || grid[i][j + 1] === 1)
    )
      queue.push([i, j + 1, cnt]);
    // bottom
    if (i < grid.length - 1 && (grid[i + 1][j] === 0 || grid[i + 1][j] === 1))
      queue.push([i + 1, j, cnt]);
    // left
    if (j > 0 && (grid[i][j - 1] === 0 || grid[i][j - 1] === 1))
      queue.push([i, j - 1, cnt]);
  }
  return 1e9;
};

var shortestBridge = function (grid) {
  // Split the lands
  let flag = false;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === 1) {
        DFS(grid, i, j);
        flag = true;
        break;
      }
    }
    if (flag) break;
  }
  let arr = [];
  for (let row of grid) arr.push(row.slice());

  // For every land '2' use BFS search
  let min = 1e9;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === 2) {
        min = Math.min(min, BFS(grid, i, j));
        grid = [];
        for (let row of arr) grid.push(row.slice());
      }
    }
  }
  return min;
};
