/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    const result = Array(nums.length).fill(1);
    
    let prevLeft = 1;

    for (let i = 0; i < nums.length; i++) {
        result[i] *= prevLeft;
        prevLeft *= nums[i];
    }
    
    let prevRight = 1;
    
    for (let j = nums.length - 1; j >= 0; j--) {
        result[j] *= prevRight;
        prevRight *= nums[j];
    }
    
    return result;
};

