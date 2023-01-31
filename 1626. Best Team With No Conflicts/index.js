/**
 * @param {number[]} scores
 * @param {number[]} ages
 * @return {number}
 */
var bestTeamScore = function (scores, ages) {
  const len = scores.length;
  const players = new Array(len);

  for (let i = 0; i < len; i++) {
    const score = scores[i];
    const age = ages[i];
    const player = { score, age };
    players[i] = player;
  }
  players.sort((A, B) => B.score - A.score || B.age - A.age);

  // key => result of key
  const map = new Map();
  function toKey(...args) {
    return args.join("|");
  }

  function getTotal(fromIndex, maxAge) {
    const key = toKey(fromIndex, maxAge);
    if (map.has(key)) return map.get(key);

    if (fromIndex === -1 + len) {
      const onlyPlayer = players[fromIndex];
      if (onlyPlayer.age <= maxAge) return onlyPlayer.score;
      else return 0;
    }

    let result = 0;
    const firstPlayer = players[fromIndex];
    if (firstPlayer.age <= maxAge) {
      // when first player can be chosen
      let subresultWithFirstPlayer = getTotal(1 + fromIndex, firstPlayer.age);
      let outcome = firstPlayer.score + subresultWithFirstPlayer;
      result = Math.max(result, outcome);
    }
    let subresultWithoutFirstPlayer = getTotal(1 + fromIndex, maxAge);
    result = Math.max(result, subresultWithoutFirstPlayer);

    map.set(key, result);
    return result;
  }

  let result = getTotal(0, 1001);
  return result;
};
