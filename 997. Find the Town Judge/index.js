/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function (N, trust) {
  let peeps = new Map(); // each person (up to N) is a key in a map
  for (let i = 1; i <= N; i++) {
    peeps.set(i, 0);
  }

  for (let i = 0; i < trust.length; i++) {
    peeps.delete(trust[i][0]); // if the person trusts someone, delete the person from map
  }

  if (peeps.size === 0) {
    return -1; // if map is empty, return -1
  } else {
    let judge = peeps.keys().next().value; // get the only key remaining in the map
    let count = 0; // used to count how many times the judge was trusted
    for (let i = 0; i < trust.length; i++) {
      if (trust[i][1] === judge) {
        // if judge is found in the array, increment the map value
        count += 1;
      }
    }
    if (count == N - 1) {
      return judge; // # of needed trusts for the judge must be N-1 (judge can't trust judge)
    } else {
      return -1;
    }
  }
};
