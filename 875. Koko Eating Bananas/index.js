/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function (piles, h) {
  let left = 1;
  let right = 1e9;

  while (left < right) {
    const mid = left + Math.floor((right - left) / 2);
    const hoursNeeded = calcHours(mid);

    if (h < hoursNeeded) left = mid + 1;
    else right = mid;
  }

  return left;

  function calcHours(k) {
    let count = 0;

    for (const pile of piles) {
      count += Math.ceil(pile / k);
    }

    return count;
  }
};
