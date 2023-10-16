/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    const countNums = {};
    let result;
    
    nums.forEach((el) => {
        countNums[el] ? countNums[el] += 1 : countNums[el] = 1;
    })
    
    for (let num in countNums) {
        if (countNums[num] === 1) {
            result = num;
            break;
        }
    }
    
    return result
};