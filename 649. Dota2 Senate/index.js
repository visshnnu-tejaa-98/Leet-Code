/**
 * @param {string} senate
 * @return {string}
 */
var predictPartyVictory = function (senate) {
  let Radiant = [];
  let Dire = [];
  let n = senate.length;

  for (let i = 0; i < n; i++) {
    if (senate[i] == "R") {
      Radiant.push(i + n);
    } else {
      Dire.push(i + n);
    }
  }

  while (Radiant.length > 0 && Dire.length > 0) {
    if (Radiant[0] < Dire[0]) {
      Radiant.push(Radiant[0] + n);
    } else {
      Dire.push(Dire[0] + n);
    }

    Radiant.shift();
    Dire.shift();
  }

  return Radiant.length > 0 ? "Radiant" : "Dire";
};
