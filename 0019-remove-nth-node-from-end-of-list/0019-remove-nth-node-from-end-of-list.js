/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
const removeNthFromEnd = function(head, n) {
  let countDepth = 0;
  let copyHead = head;
  
  if (!head.next) {
    head.val = null;
    
    return null;
  }
  
  while (copyHead) {
    countDepth++;
    copyHead = copyHead.next;
  }
  
  const target = countDepth - n;
  let copyNode = head;
  let countTillTarget = 1;
  
  if (!target) {
    return head.next;
  }
  
  while (countTillTarget !== target) {
    countTillTarget++;
    copyNode = copyNode.next;
  }
  
  const removedNextNode = copyNode.next;
  copyNode.next = copyNode.next.next;
  
  return head;
};