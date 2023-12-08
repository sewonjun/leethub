/**
 * @param {number[]} nums
 * @return {number}
 */
const removeDuplicates = function(nums) {
  let swipIdx = 0;
  
  for (let i = 1; i < nums.length; i++) {
    if (nums[swipIdx] !== nums[i]) {
      swipIdx++;
      nums[swipIdx] = nums[i];
    }
  }
  
  return ++swipIdx;
};