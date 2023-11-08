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
const swapPairs = function(head) {
    let currentNode = head;
    let temp = [];
    let lastSwapNode;
    let swapNodeTemp = [];
    
    if (!head?.val && !head?.next) return head;

    while(currentNode.next) {
        temp.push(currentNode);
        currentNode = currentNode.next;

        if (temp.length === 2) {
            const swappedNode = swap (temp[0], temp[1]);

            if (lastSwapNode)lastSwapNode.next = swappedNode;
            swapNodeTemp.push(swappedNode);
            lastSwapNode = swappedNode.next;
            temp = [];
        }
    } 
    
    if (currentNode.val === 0 || currentNode.val) {
        temp.push(currentNode);
        currentNode = currentNode.next;

        if (temp.length === 2) {
            const swappedNode = swap (temp[0], temp[1]);

            if (lastSwapNode)lastSwapNode.next = swappedNode;
            swapNodeTemp.push(swappedNode);
            lastSwapNode = swappedNode.next;
            temp = [];
        }
    }

    return swapNodeTemp[0] ? swapNodeTemp[0] : head;
};

function swap (node1, node2) {
    node1.next = node2.next;
    node2.next = node1;

    return node2;
}