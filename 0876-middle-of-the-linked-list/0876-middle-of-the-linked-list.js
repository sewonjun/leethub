/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {
    let countNodes = 0;
    let countTarget = head;
    
    while (countTarget) {
        if (countTarget.val) countNodes++;
        
        countTarget = countTarget.next;
    }
    
    const middleIndex = Math.ceil((countNodes + 1) / 2);
    
    let result = head;
    let searchIndex = 1;

    while (searchIndex < middleIndex) {    
        result = result.next
        searchIndex++;
    }
    
    return result;
};