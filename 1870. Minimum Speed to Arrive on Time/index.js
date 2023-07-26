/**
 * @param {number[]} dist
 * @param {number} hour
 * @return {number}
 */
var minSpeedOnTime = function (dist, hour) {
  const getHour = (dist, speed) => {
    let sum = 0;
    for (let i = 0; i < dist.length - 1; i++) {
      sum += Math.ceil(dist[i] / speed);
    }
    sum += dist[dist.length - 1] / speed;
    return sum;
  };

  let l = 0,
    m,
    sum,
    res = -1,
    r = 10000000;
  while (l < r) {
    m = Math.floor((l + r) / 2);
    sum = getHour(dist, m);
    if (sum <= hour) {
      res = m;
      r = m;
    } else l = m + 1;
  }
  if (res === -1 && getHour(dist, r) <= hour) res = r;
  return res;
};
