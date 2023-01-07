// Function Defination
var canCompleteCircuit = function (gas, cost) {
  let total_cost = 0;
  let total_gas = 0;
  let current_gas = 0;
  let start = 0;

  // Finding the total gas
  for (let i = 0; i < gas.length; i++) {
    total_gas = total_gas + gas[i];
  }

  // Finding the total cost
  for (let i = 0; i < cost.length; i++) {
    total_cost = total_cost + cost[i];
  }

  // Validating if gas < cost, return -1
  if (total_gas < total_cost) {
    return -1;
  }

  for (let i = 0; i < gas.length; i++) {
    current_gas = current_gas + gas[i] - cost[i];
    if (current_gas < 0) {
      start = i + 1;
      current_gas = 0;
    }
  }
  return start;
};

// Driver code
// let gas = [1, 2, 3, 4, 5];
// let cost = [3, 4, 5, 1, 2];
let gas = [2, 3, 4];
let cost = [3, 4, 3];
let result = canCompleteCircuit(gas, cost);
console.log(result);
