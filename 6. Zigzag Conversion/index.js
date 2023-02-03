var convert = function (s, numRows) {
  if (numRows === 1) return s;
  const arr = [];
  for (let i = 0; i < numRows; i++) arr.push([]);
  let i = 0;
  let j = 0;
  let dir = "down";
  for (let k = 0; k < s.length; k++) {
    arr[i][j] = s[k];
    if (dir === "down") {
      if (i < numRows - 1) i++;
      else {
        dir = "up";
        i--;
        j++;
      }
    } else {
      if (i > 0) {
        i--;
        j++;
      } else {
        dir = "down";
        i++;
      }
    }
  }
  const r = arr.map((_a) => _a.filter((_v) => _v).join("")).join("");
  return r;
};
