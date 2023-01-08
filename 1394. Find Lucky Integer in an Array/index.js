// Function Defination
var findLucky = function (arr) {
  let obj = {};
  for (let i = 0; i < arr.length; i++)
    !obj[arr[i]] ? (obj[arr[i]] = 1) : obj[arr[i]]++;
  arr = [];
  for (let key in obj) {
    if (key == obj[key]) {
      arr.push(key);
    }
  }

  return arr.length > 0 ? arr.sort((a, b) => b - a)[0] : -1;
};

// Driver Code
let arr = [2, 2, 3, 4];
// let arr = [2, 2, 2, 3, 3];
let result = findLucky(arr);
console.log(result);
