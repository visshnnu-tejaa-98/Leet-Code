/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const detectCycle = (head) => {
    let node = head
 
    while (node){
        if(node.visited){
            delete node.visited
            return node 
        }else{
            node.visited = true
            node=node.next
        }
    }

  return null
    
};