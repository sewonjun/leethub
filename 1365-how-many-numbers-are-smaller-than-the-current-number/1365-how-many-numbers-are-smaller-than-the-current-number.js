/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
    const result = [];
    
    nums.forEach((el, index) => {
        let count = 0;
        for (let i = 0; i < nums.length; i++) {
            if (el > nums[i]) {
                count++;
            }
        }
        
        result.push(count);
    })
    
    return result;
};