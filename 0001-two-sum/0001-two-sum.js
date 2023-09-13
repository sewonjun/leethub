/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let returnVal = [];
    for (let i = 0; i < nums.length - 1; i++) {
        const firstTarget = nums[i];

        for (let j = i + 1; j < nums.length; j++) {
            const secondTarget = nums[j];

            if ( Number(firstTarget) + Number(secondTarget) === target) {
                returnVal = [i ,j];

                break;
            }
        }
    }

    return returnVal;
};