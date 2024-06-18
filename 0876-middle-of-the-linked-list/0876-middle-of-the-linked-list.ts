/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function middleNode(head: ListNode | null): ListNode | null {
  let duplicatedNode = head;
  let nodeCount = 0;
  
  while (duplicatedNode.next) {
    if (duplicatedNode.val) {
      nodeCount++;
      duplicatedNode = duplicatedNode.next;
    }
  }
  
  let middleNode = nodeCount % 2 === 0 ? nodeCount / 2 : Math.ceil(nodeCount / 2);
  
  while (middleNode > 0) {
    middleNode--;
    
    head = head.next;
  }
  
  return head;
};