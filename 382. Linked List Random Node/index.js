/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 */
// var Solution = function(head) {

// };

/**
 * @return {number}
 */
// Solution.prototype.getRandom = function() {

// };

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(head)
 * var param_1 = obj.getRandom()
 */
class Solution {
  constructor(head) {
    this.head = head;
  }

  getRandom() {
    let index = this.head;
    let arr = [];
    let maxSize = 100;
    while (index) {
      arr.push(index.val);
      if (arr.length >= maxSize) {
        let min = 0;
        let max = arr.length;
        let rnd = Math.floor(Math.random() * arr.length);
        arr = [arr[rnd]];
      }
      index = index.next;
    }
    let min = 0;
    let max = arr.length;
    let rnd = Math.floor(Math.random() * arr.length);
    return arr.length > 0 ? arr[rnd] : null;
  }
}
