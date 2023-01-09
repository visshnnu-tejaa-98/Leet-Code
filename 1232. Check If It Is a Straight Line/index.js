// Function Defination
var checkStraightLine = function (coordinates) {
  let xdiff = coordinates[1][0] - coordinates[0][0];
  let ydiff = coordinates[1][1] - coordinates[0][1];
  for (let i = 2; i < coordinates.length; i++) {
    let current_xdiff = coordinates[i][0] - coordinates[i - 1][0];
    let current_ydiff = coordinates[i][1] - coordinates[i - 1][1];
    if (ydiff * current_xdiff !== xdiff * current_ydiff) {
      return false;
    }
  }
  return true;
};

// Driver code
let coordinates = [
  [1, 2],
  [2, 3],
  [3, 4],
  [4, 5],
  [5, 6],
  [6, 7],
];
let result = checkStraightLine(coordinates);
console.log(result);
