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
 * @return {boolean}
 */
const isBalanced = function(root) {
    const depth = checkDepth(root, 0);
    
    return depth === -1 ? false : true;
};

function checkDepth(tree, depthCount) {
    if (!tree) return depthCount;
    depthCount++;
    
    const treeLeft = checkDepth(tree.left, depthCount);
    const treeRight = checkDepth(tree.right, depthCount);
    
    if (Math.abs(treeLeft - treeRight) > 1) return -1;
    if (treeLeft === -1 || treeRight === -1) return -1;
    
    return Math.max(treeLeft, treeRight);
}