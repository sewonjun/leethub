/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    const listArray = [];
    let target = head;
    
    while (target.next) {
        listArray.push(target.val);
        target = target.next;
    };

    listArray.push(target.val);
    
    const reversedListArray = [...listArray].reverse();
    
    if (listArray.join("") === reversedListArray.join("")) return true;
    
    return false;
};