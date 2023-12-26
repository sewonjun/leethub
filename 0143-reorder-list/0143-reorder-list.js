/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
  let reversedList = {};
  let headCopy = head;
  let count = 0; 
  
  while (headCopy?.val) {
    const newNode = {val: headCopy.val, next:null };
    newNode.next = reversedList;
    reversedList = newNode;
    headCopy = headCopy.next;
    count++;
  }

  let newNode = head;

  while (count > 0) {
    const temp = newNode.next;
    
    if (count === 1) {
      newNode.next = null;

      break;
    };

    if(count === 2) {
      newNode.next = {val: reversedList.val, next: null};
      
      break;
    }
    
    newNode.next = {val: reversedList.val, next: temp};
    newNode = newNode.next.next;
    reversedList = reversedList.next;
    count -= 2;
  }
};
