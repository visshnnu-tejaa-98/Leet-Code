/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function (s, k) {
  let maxCount = 0,
    count = 0;
  const vowel = ["a", "e", "i", "o", "u"];
  for (let i = 0; i < s.length; i++) {
    if (vowel.includes(s[i])) count++;

    if (i >= k && vowel.includes(s[i - k])) count--;

    if (count == k) return k;

    if (maxCount < count) maxCount = count;
  }
  return maxCount;
};
