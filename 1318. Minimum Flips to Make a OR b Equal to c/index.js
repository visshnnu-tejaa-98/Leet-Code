/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number}
 */
var minFlips = function (a, b, c) {
  let o = 0;
  for (let i = 0; i < 32; i++) {
    let cbit = (c >> i) & 1;
    let abit = (a >> i) & 1,
      bbit = (b >> i) & 1;
    let v = abit || bbit;
    if (cbit === v) continue;
    o += cbit == 1 ? 1 : abit + bbit;
  }
  return o;
};
