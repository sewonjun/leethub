/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function(nums, target) {
  let firstIndex = 0;
  let lastIndex = nums.length - 1;
  
  while (firstIndex < lastIndex) {
    if (nums[firstIndex] + nums[lastIndex] === target) break;
    
    if (lastIndex - 1 === firstIndex) {
      firstIndex++;
      lastIndex = nums.length - 1;
      
      continue;
    }
    
    lastIndex--;
  }
  
  return [firstIndex, lastIndex];
}