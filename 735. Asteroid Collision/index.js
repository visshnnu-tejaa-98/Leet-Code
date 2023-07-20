/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function (asteroids) {
  const n = asteroids.length;
  const s = [];
  for (let i = 0; i < n; i++) {
    if (asteroids[i] > 0 || s.length === 0) {
      s.push(asteroids[i]);
    } else {
      while (
        s.length > 0 &&
        s[s.length - 1] > 0 &&
        s[s.length - 1] < Math.abs(asteroids[i])
      ) {
        s.pop();
      }
      if (s.length > 0 && s[s.length - 1] === Math.abs(asteroids[i])) {
        s.pop();
      } else {
        if (s.length === 0 || s[s.length - 1] < 0) {
          s.push(asteroids[i]);
        }
      }
    }
  }
  const res = new Array(s.length);
  for (let i = s.length - 1; i >= 0; i--) {
    res[i] = s.pop();
  }
  return res;
};
