/**
 * @param {number[]} nums
 * @return {number}
 */
const majorityElement = function(nums) {
  const countedNums = nums.reduce((acc, cur) => {
    acc[cur] ? acc[cur] += 1 : acc[cur] = 1;
    
    return acc;
  }, {});
  
  let maxCount = 0;
  let result
  for(let num in countedNums) {
    if (countedNums[num] > maxCount) {
      maxCount = countedNums[num];
      result = num;
    }
  }
  
  return result;
};