/**
 * @param {number[]} nums
 * @return {number}
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumDeviation = function (nums) {
  //Heap implementaion in Javascript
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
        return b - a;
      } else {
        return a - b;
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
  let maxHeap = new Heap(),
    min = Number.MAX_SAFE_INTEGER;
  for (let i = 0; i < nums.length; i++) {
    let c = nums[i];
    if (c % 2 === 1) {
      c *= 2;
    }
    min = Math.min(min, c);
    maxHeap.insert(c);
  }
  let minDeviation = Number.MAX_SAFE_INTEGER;
  while (maxHeap.getSize() > 0) {
    let top = maxHeap.removeTop();
    let d = top - min;
    minDeviation = Math.min(minDeviation, d);
    if (top % 2 === 0) {
      top = top / 2;
      min = Math.min(min, top);
      maxHeap.insert(top);
    } else {
      break;
    }
  }
  return minDeviation;
};
