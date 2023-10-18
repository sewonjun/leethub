/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
    const orderedTree = [];
    
    function inorderTraverse(node) {
        if (node.left) inorderTraverse(node.left);
        orderedTree.push(node.val);
        if (node.right) inorderTraverse(node.right);
    }
    
    inorderTraverse(root);
    
    return orderedTree[k - 1]
};


