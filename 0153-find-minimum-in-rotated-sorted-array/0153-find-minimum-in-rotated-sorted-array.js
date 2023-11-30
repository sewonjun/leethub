/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
  let result = null;
  
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] > nums[i + 1]) {
      result = nums[i + 1];
      
      break;
    }
  }
  
  if (result === null) return nums[0];
  
  return result;
};