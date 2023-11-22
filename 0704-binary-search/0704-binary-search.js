/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const search = function(nums, target) {
  if (!nums.length) return -1;
  
  let result = null;
  let leftPointer = Math.floor(nums.length/2); 
  let rightPointer = Math.floor(nums.length/2) + 1;
  
  while(leftPointer >= 0 || rightPointer < nums.length) {
    console.log(leftPointer);
    if (nums[leftPointer] === target) {
      result = leftPointer;
      
      break;
    }
    
    if (nums[rightPointer] === target) {
      result = rightPointer;

      break;
    }
    
    leftPointer--;
    rightPointer++;
  }
  
  return result === null ? -1 : result;
}