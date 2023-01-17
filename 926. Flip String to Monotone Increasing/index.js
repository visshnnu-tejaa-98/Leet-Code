var minFlipsMonoIncr = function (s) {
  const n = s.length;
  let zeros = 0;

  for (let i = n - 1; i >= 0; i--) {
    if (s.charAt(i) === "0") zeros++;
  }

  let minFlips = Number.MAX_SAFE_INTEGER;
  let ones = 0;

  for (let i = 0; i < n; i++) {
    const digit = s.charAt(i);

    minFlips = Math.min(minFlips, ones + zeros);

    if (digit === "1") ones++;
    else zeros--;
  }

  minFlips = Math.min(minFlips, ones + zeros);

  return minFlips;
};
