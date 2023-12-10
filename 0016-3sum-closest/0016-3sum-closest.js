/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const threeSumClosest = function(nums, target) {
  nums = nums.sort((a, b) => a - b);
  
  function sumInteger(arr) {
    return arr.reduce((acc, cur) => {
      acc += cur;
      
      return acc;
    }, 0);
  }
  

  let closestSum = sumInteger([nums[0], nums[1], nums[nums.length - 1]]);
  
  for ( start = 0; start < nums.length - 2; start++) {
    let middle = start + 1;
    let end = nums.length - 1;

    while (middle < end) {
      const sum = sumInteger([nums[start], nums[middle], nums[end]]);

      if (sum === target) return sum;
      
      if (sum > target) {
          end--;
      }
      
      if (sum < target) {
          middle++;
      }

      if (Math.abs(sum - target) < Math.abs(closestSum - target)) {
        closestSum = sum;
      }
    }
  }

  return closestSum;
};