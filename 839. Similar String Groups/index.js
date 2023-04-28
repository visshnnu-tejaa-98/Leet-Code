/**
 * @param {string[]} strs
 * @return {number}
 */
var numSimilarGroups = function (strs) {
  if (strs.length === 1) {
    return 1;
  }
  let arr = new Array(strs.length).fill().map((ele, i) => i);
  let count = new Array(strs.length).fill(1);
  for (let i = 0; i < strs.length; i++) {
    for (let j = i + 1; j < strs.length; j++) {
      if (arr[i] === arr[j]) {
        continue;
      }
      if (calculateAdjList(strs[i], strs[j])) {
        let parentI = findParent(arr, i);
        let parentJ = findParent(arr, j);

        if (parentI === parentJ) continue;

        if (count[parentI] >= count[parentJ]) {
          count[parentI] += count[parentJ];
          arr[parentJ] = parentI;
        } else {
          count[parentJ] += count[parentI];
          arr[parentI] = parentJ;
        }
      }
    }
  }
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === i) {
      result++;
    }
  }
  return result;
};

function findParent(arr, x) {
  if (arr[x] !== x) {
    arr[x] = findParent(arr, arr[x]);
  }
  return arr[x];
}

function calculateAdjList(word1, word2) {
  let count = 0;
  for (let i = 0; i < word1.length; i++) {
    if (word1[i] !== word2[i]) {
      count++;
    }

    if (count > 2) {
      return false;
    }
  }

  return true;
}
