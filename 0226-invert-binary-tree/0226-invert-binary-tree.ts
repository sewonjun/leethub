/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function invertTree(root: TreeNode | null): TreeNode | null {
  if (!root) return root;
  
  invertNode(root);

  return root;
};


function invertNode(treenode) {
  if (!treenode) return;
  
  const temp = treenode?.left ? treenode.left : null;
  treenode.left = treenode.right;
  treenode.right = temp;
  
  if (treenode.left !== null) {
    invertNode(treenode.left);
  }
  
  if (treenode.right !== null) {
    invertNode(treenode.right);
  }
}
