let tasks = [2, 2, 3, 3, 2, 4, 4, 4, 4, 4];
// let tasks = [2, 3, 3];
var minimumRounds = function (tasks) {
  let obj = {};
  let result = 0;
  for (let i = 0; i < tasks.length; i++) {
    !obj[tasks[i]] ? (obj[tasks[i]] = 1) : obj[tasks[i]]++;
  }

  for (let key in obj) {
    if (obj[key] < 2) {
      return -1;
    }
    let count = 0;
    while (obj[key] >= 3) {
      obj[key] = obj[key] - 3;
      count++;
    }
    if (obj[key]) {
      count++;
    }
    result = result + count;
  }
  return result;
};

console.log(minimumRounds(tasks));
