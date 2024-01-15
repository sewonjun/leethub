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
  //root외에 다른 node가 없을 시.
  if (!root.left && !root.right) return true;
  
  //위에가 통과되면, depth 2부터 시작한다는 말.. 
  //만약 root 다음 depth부터 값이 다르다면, false; 
  //하나의 값이 undefined여도,false는 나온다. 
  if (root.left?.val !== root.right?.val) return false;
  
  //depth 2번에서 node가 끝난다면? 
  if (!root.left.left && !root.left.right && !root.right.left && !root.right.left) {
    return true;
  }
  
  let outer = null;
  let inner = null;
  
      
  // if (root.left?.left && root.right?.right) {
    outer = checkMirror(root.left.left, root.right.right);
    console.log("outer", outer);
  // } else {
  //   console.log("outer 없음 ");
  // }
  
  // if (root.left?.right && root.right?.left) {
    inner = checkMirror(root.left.right, root.right.left);
    console.log("inner", inner)
  // } else {
  //   console.log("inner 없음 ")
  // }
  

  return inner && outer;
};


function checkMirror(node1, node2) {
  console.log(node1, node2);
  if (node1 === null && node2 === null) return true;
  if (node1 === null || node2 === null) return false;
  
  if (node1.val !== node2.val) {
    return false;
  }
  
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