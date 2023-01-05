// Function defination
var findMinArrowShots = function (points) {
  points.sort((a, b) => a[1] - b[1]);
  let arrows = 1;
  let end = points[0][1];
  for (let i = 0; i < points.length; i++) {
    if (points[i][0] > end) {
      arrows++;
      end = points[i][1];
    }
  }
  return arrows;
};

// Driver Code
let points = [
  [1, 2],
  [2, 3],
  [3, 4],
  [4, 5],
];
let result = findMinArrowShots(points);
console.log(result);
