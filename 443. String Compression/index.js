/**
 * @param {character[]} chars
 * @return {number}
 */

// insert `count` as characters, and
// return length for current compressed string
var insertCount = (chars, count, len) => {
  let nums = count.toString().split("");
  nums.forEach((c, inc) => {
    chars[len + inc] = c;
  });
  return len + nums.length;
};

var compress = function (chars) {
  let count = 1;
  let len = 1;
  // `len` is current length of compressed string,
  // also the position to insert count
  for (let i = 1; i < chars.length; i++) {
    if (chars[i] == chars[i - 1]) {
      count++;
    } else {
      // copy current character
      chars[len - 1] = chars[i - 1];
      if (count > 1) {
        len = insertCount(chars, count, len);
      }
      // for next round
      len += 1;
      count = 1;
    }
  }
  // for last round
  chars[len - 1] = chars[chars.length - 1];
  if (count > 1) {
    return insertCount(chars, count, len);
  }
  return len;
};
