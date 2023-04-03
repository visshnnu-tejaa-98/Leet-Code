/**
 * @param {number[]} people
 * @param {number} limit
 * @return {number}
 */
let numRescueBoats = function (people, limit) {
  let count = 0,
    i = 0,
    j = people.length - 1;
  people.sort(function (a, b) {
    return a - b;
  });
  console.log(people, "people-after sort");
  while (i <= j) {
    if (people[i] + people[j] <= limit) {
      count++;
      i++;
      j--;
    } else {
      count++;
      j--;
    }
  }
  return count;
};
