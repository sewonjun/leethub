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
const isSymmetric = function(root) {
  if (!root.left && !root.right) return true;

  if (root.left?.val !== root.right?.val) return false;

  if (!root.left.left && !root.left.right && !root.right.left && !root.right.left) {
    return true;
  }
  
  let outer = null;
  let inner = null;
  
  outer = checkMirror(root.left.left, root.right.right);
  inner = checkMirror(root.left.right, root.right.left);

  return inner && outer;
};


function checkMirror(node1, node2) {
  if (node1 === null && node2 === null) return true;
  
  if (node1 === null || node2 === null) return false;
  
  if (node1.val !== node2.val) return false;
  
  const node1Left = node1?.left;
  const node2Right = node2?.right;
  const node1Right = node1?.right;
  const node2Left = node2?.left;

  if (!node1Left && !node2Right && !node1Right && !node2Left) {
    return true;
  }
  
  let inner = null;
  let outer =  null;
  
  
  if (node1Left && node2Right) {
    inner = checkMirror(node1Left, node2Right);
  } 
  
  if (node1Right && node2Left) {
    outer = checkMirror(node1Right, node2Left);
  }
  
  if (inner === null && outer === null) {
    return false;
  }
  
  if (inner === null) {
    return outer;
  }
  
  if (outer === null) {
    return inner;
  }
  
  return inner && outer;
}