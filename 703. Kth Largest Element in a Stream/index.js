/**
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function (k, nums) {
  this.k = k;
  this.minpq = new MinPriorityQueue();
  for (let i = 0; i < nums.length; i++) {
    if (this.minpq.size() < k) {
      this.minpq.enqueue(nums[i]);
    } else if (
      this.minpq.size() === k &&
      nums[i] >= this.minpq.front().element
    ) {
      this.minpq.enqueue(nums[i]);
      this.minpq.dequeue();
    }
  }
};

/**
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function (val) {
  if (this.minpq.size() < this.k) {
    this.minpq.enqueue(val);
  } else if (val > this.minpq.front().element) {
    this.minpq.enqueue(val);
    this.minpq.dequeue();
  }
  return this.minpq.front().element;
};

/**
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */
