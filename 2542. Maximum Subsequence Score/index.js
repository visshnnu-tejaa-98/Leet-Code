/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number}
 */
var maxScore = function (nums1, nums2, k) {
  //START of heap class
  class Heap {
    constructor(type) {
      this.type = type;
      this.data = [];
      this.data[0] = undefined;
    }
    print() {
      for (let i = 1; i < this.data.length; i++) {
        console.log(this.data[i]);
      }
    }
    getSize() {
      return this.data.length - 1;
    }
    insert(value) {
      this.data.push(value);
      if (this.data.length == 2) {
        return;
      }
      let lastIndex = this.data.length - 1;
      while (
        this.data[Math.floor(lastIndex / 2)] !== undefined &&
        this.compare(
          this.data[lastIndex],
          this.data[Math.floor(lastIndex / 2)]
        ) > 0
      ) {
        let temp = this.data[Math.floor(lastIndex / 2)];
        this.data[Math.floor(lastIndex / 2)] = this.data[lastIndex];
        this.data[lastIndex] = temp;
        lastIndex = Math.floor(lastIndex / 2);
      }
    }
    //This returns a positive number if a is greater than b. Here meaing of being greater depends on the type of heap. For max heap it will return positive number if a>b and for min heap it will return positive number if a<b .
    compare(a, b) {
      if (this.type === "min") {
        if (Array.isArray(a) && Array.isArray(b)) {
          return b[0] - a[0];
        } else {
          return b - a;
        }
      } else {
        if (Array.isArray(a) && Array.isArray(b)) {
          return a[0] - b[0];
        } else {
          return a - b;
        }
      }
    }
    removeTop() {
      let max = this.data[1];
      if (this.getSize() > 1) {
        this.data[1] = this.data.pop();
        this.heapify(1);
      } else {
        //If the size is 0 then just remove the element, no shifting and hipify will be applicable
        this.data.pop();
      }
      return max;
    }
    getTop() {
      let max = null;
      if (this.getSize() >= 1) {
        max = this.data[1];
      }
      return max;
    }
    heapify(pos) {
      if (pos * 2 > this.data.length - 1) {
        //That means element at index 'pos' is not having any child
        return;
      }
      if (
        (this.data[pos * 2] !== undefined &&
          this.compare(this.data[pos * 2], this.data[pos]) > 0) ||
        (this.data[pos * 2 + 1] !== undefined &&
          this.compare(this.data[pos * 2 + 1], this.data[pos]) > 0)
      ) {
        if (
          this.data[pos * 2 + 1] === undefined ||
          this.compare(this.data[pos * 2 + 1], this.data[pos * 2]) <= 0
        ) {
          let temp = this.data[pos * 2];
          this.data[pos * 2] = this.data[pos];
          this.data[pos] = temp;
          this.heapify(pos * 2);
        } else {
          let temp = this.data[pos * 2 + 1];
          this.data[pos * 2 + 1] = this.data[pos];
          this.data[pos] = temp;
          this.heapify(pos * 2 + 1);
        }
      }
    }
  }
  //END of heap class

  let arr2 = [];
  for (let i = 0; i < nums2.length; i++) {
    arr2.push([i, nums2[i]]);
  }
  arr2.sort(function (a, b) {
    return b[1] - a[1];
  });

  let currentRate,
    sum = 0,
    max = 0;
  let minHeap = new Heap("min");
  for (let i = 0; i < nums2.length; i++) {
    let index = arr2[i][0];
    currentRate = nums2[index]; //This is the minimum number from nums2 so far
    sum += nums1[index];
    minHeap.insert(nums1[index]);
    if (minHeap.getSize() > k) {
      let top = minHeap.removeTop();
      sum -= top;
    }
    if (minHeap.getSize() === k) {
      //We have choosen k elements
      max = Math.max(max, sum * currentRate);
    }
  }
  return max;
};
