/**
 * @param {number[]} nums
 * @return {number}
 */
const maxSubArray = function(nums) {
  let largestSum = Math.max(...nums); 
  let curSum = 0;
  
  nums.forEach(num => {
    curSum += num;
    
    if (curSum > largestSum) largestSum = curSum;
    
    if (curSum < 0) curSum = 0;
  })
  
  return largestSum;
};
