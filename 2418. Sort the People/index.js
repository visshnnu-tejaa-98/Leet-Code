var sortPeople = function (names, heights) {
  let array = [];
  let sortedArray = [];
  let result = [];
  for (let i = 0; i < names.length; i++) {
    let obj = {};
    obj.name = names[i];
    obj.height = heights[i];
    array.push(obj);
  }
  sortedArray = array.sort((a, b) => b.height - a.height);
  for (let i = 0; i < sortedArray.length; i++) {
    result.push(sortedArray[i].name);
  }
  return result;
};

console.log(sortPeople(["Mary", "John", "Emma"], [180, 165, 170]));
