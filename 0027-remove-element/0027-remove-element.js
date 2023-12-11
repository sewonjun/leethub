/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
const removeElement = function(nums, val) {
  let count = 0;
  let target = nums.length - 1;
  let curPoint = 0;
  
  while (nums.indexOf(val) !== -1) {
    if (nums[curPoint] === val) {
      const replaceNum = nums[target];
      nums[curPoint] = replaceNum;
      nums[target] = NaN;
      target--;
      count++;
    } else {
      curPoint++;
    }
  }

  return nums.length - count;
};