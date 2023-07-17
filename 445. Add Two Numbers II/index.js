/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  const stack1 = getStack(l1);
  const stack2 = getStack(l2);
  let head = null;
  let carry = 0;
  while (stack1.length || stack2.length || carry) {
    const sum = (stack1.pop() || 0) + (stack2.pop() || 0) + carry;
    carry = Math.floor(sum / 10);
    head = new ListNode(sum % 10, head);
  }
  return head;
};

var getStack = function (node) {
  const stack = [];
  while (node) {
    stack.push(node.val);
    node = node.next;
  }
  return stack;
};
