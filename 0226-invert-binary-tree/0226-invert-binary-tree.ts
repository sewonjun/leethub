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
    //왼쪽 노드들 각장 invert하고, 오른쪽 invert해서 붙이기..? 
  if (!root) return root;
  
  const left = root?.left ? invertNode(root.left): null;
  const right = root?.right ? invertNode(root.right) : null;
  // console.log(left, right);

  root.right = left;
  root.left = right;

  return root;
};


function invertNode(treenode) {
  // console.log("treenode", treenode);
  const temp = treenode?.left ? treenode.left : null;
  treenode.left = treenode.right;
  treenode.right = temp;
  
  if (treenode.left !== null) {
    invertNode(treenode.left);
  }
  
  if (treenode.right !== null) {
    invertNode(treenode.right);
  }
  
  return treenode;
}