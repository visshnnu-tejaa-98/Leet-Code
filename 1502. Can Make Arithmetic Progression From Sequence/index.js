/**
 * @param {number[]} arr
 * @return {boolean}
 */
const canMakeArithmeticProgression = (arr) => {
  const sortedArray = [...arr].sort((a, b) => a - b);
  let difference = sortedArray[1] - sortedArray[0];
  for (let item = 1; item < sortedArray.length - 1; item++) {
    if (sortedArray[item + 1] - sortedArray[item] !== difference) return false;
  }
  return true;
};
