/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
  const pivot = Math.floor(nums.length / 2);
  let curIdx = pivot;
  
  if (nums[0] >= target) return 0;
  
  if (nums.at(-1) < target) return nums.length;
  
  if (nums.at(-1) === target) return nums.length - 1;
  
  while (true) {
    if (curIdx < 0 || curIdx >= nums.length) break;
    
    if (nums[curIdx] === target) break; 
    
    if (nums[curIdx] > target) {
      if (nums[curIdx - 1] < target) {
        break;
      };
      
      curIdx--;
      continue;
    }
    
    if (nums[curIdx] < target) {
      if (nums[curIdx + 1] > target) {
        curIdx++;
        
        break;
      };
      
      curIdx++;
      
      continue;
    }
  }
  
  return curIdx;
};