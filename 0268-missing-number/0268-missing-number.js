/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    const sortedNums = nums.sort((a, b) => a - b);
    
    for (let i = 0; i < nums.length; i++) {
        if (i !== sortedNums[i]) return i;
    }
    
    return (sortedNums.at(-1) + 1)
};