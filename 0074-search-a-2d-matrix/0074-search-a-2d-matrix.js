/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
  let targetMatrix = null;
  let result = false;
  
  for (let i = 0; i < matrix.length; i++) {
    if (target >= matrix[i][0] && target <= matrix[i].at(-1)) {
      targetMatrix = i;
      
      break;
    }
  }
  
  if (targetMatrix === null) {
    return false;
  }
  
  for (let el of matrix[targetMatrix]) {
    if (el === target) {
      result = true;
      
      break;
    }
  }
  
  return result;
};