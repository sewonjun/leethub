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
 * @param {number} val
 * @return {TreeNode}
 */
const searchBST = function(root, val) {
  let currentRoot = root;
  let result = null;
  
  while (true) {
    if (currentRoot.val == val) {
      result = currentRoot;
      
      break;
    }
    
    if (currentRoot.rigth === null && currentRoot.left === null) {
      break;
    }
    
    if (currentRoot.right && (val > currentRoot.val)) {
      currentRoot = currentRoot.right;
      
      continue;
    }
    
    if (currentRoot.left && (val < currentRoot.val)) {
      currentRoot = currentRoot.left;
      
      continue;
    }
    
    break;
  }
  
  return result;
};