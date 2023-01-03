let accounts = [
  [2, 8, 7],
  [7, 1, 3],
  [1, 9, 5],
];
var maximumWealth = function (accounts) {
  let max_sum = 0;
  for (let i = 0; i < accounts.length; i++) {
    let sum = 0;
    for (let j = 0; j < accounts[i].length; j++) {
      sum = sum + accounts[i][j];
    }
    max_sum = Math.max(sum, max_sum);
  }
  return max_sum;
};

console.log(maximumWealth(accounts));
