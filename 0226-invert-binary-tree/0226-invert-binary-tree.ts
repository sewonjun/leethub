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
  
  // const left = root?.left ? invertNode(root.left): null;
  // const right = root?.right ? invertNode(root.right) : null;
  // console.log(left, right);

  // root.right = left;
  // root.left = right;
  
  invertNode(root);

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

// const invertTree = function(root) {
//   a(root);
//   return root;
// };

// const a = (root) => {
//   if (!root) {
//     return;
//   }
  
//   let temp = root.left;
//   root.left = root.right;
//   root.right = temp;
  
//   invertTree(root.left);
//   invertTree(root.right);
// };