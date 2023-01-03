let points = [
  [1, 3],
  [-2, 2],
];

let k = 1;

var kClosest = function (points, k) {
  let heap = [];
  let result = [];
  for (let i = 0; i < points.length; i++) {
    let d = points[i][0] * points[i][0] + points[i][1] * points[i][1];
    heap.push([d, points[i]]);
  }
  heap.sort((a, b) => a[0] - b[0]);

  for (let i = 0; i < k; i++) {
    result.push(heap[i][1]);
  }
  return result;
};
console.log(kClosest(points, k));
