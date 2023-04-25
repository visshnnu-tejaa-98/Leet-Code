var SmallestInfiniteSet = function () {
  const data = new Set();
  this.data = data;
  for (let i = 1; i <= 1000; i++) data.add(i);
};

/**
 * @return {number}
 */
SmallestInfiniteSet.prototype.popSmallest = function () {
  const min = Math.min(...Array.from(this.data));
  this.data.delete(min);
  return min;
};

/**
 * @param {number} num
 * @return {void}
 */
SmallestInfiniteSet.prototype.addBack = function (num) {
  return this.data.add(num);
};

/**
 * Your SmallestInfiniteSet object will be instantiated and called as such:
 * var obj = new SmallestInfiniteSet()
 * var param_1 = obj.popSmallest()
 * obj.addBack(num)
 */
