// Function Defination
var maxIceCream = function (costs, coins) {
  let ice_creams = 0;
  costs.sort((a, b) => a - b);
  for (let i = 0; i < costs.length; i++) {
    if (costs[i] <= coins) {
      coins = coins - costs[i];
      ice_creams++;
    }
  }
  return ice_creams;
};

// Driver code
// let costs = [1, 3, 2, 4, 1];
let costs = [1, 6, 3, 1, 2, 5];
let coins = 20;
let result = maxIceCream(costs, coins);
console.log(result);
