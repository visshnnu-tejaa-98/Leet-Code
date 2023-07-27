/**
 * @param {number} n
 * @param {number[]} batteries
 * @return {number}
 */
var maxRunTime = function (n, batteries) {
  //We are gonna perform binary search on the range of time
  let left = 0,
    right = 10 ** 14;
  let res = 0;
  //Returns if the computers can run simultaneously for time
  const canRun = (time) => {
    //we need to calculate the average --> if a battery can run more than time minutes we just make that value equal to time during summation so that it doesn't affect the average
    let totalTime = 0;
    for (const t of batteries) {
      if (t < time) totalTime += t;
      else totalTime += time;
    }
    //We need to check whether the average is greater than or equal to needed time minutes
    return totalTime >= time * n;
  };
  while (left <= right) {
    const midd = Math.floor((left + right) / 2);
    if (canRun(midd)) {
      res = midd;
      left = midd + 1;
    } else {
      right = midd - 1;
    }
  }
  return res;
};
