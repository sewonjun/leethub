/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const frequencyNum = {};
    
    for (let num of nums) {
        if (frequencyNum[num]) {
            return true;
        }
        
        frequencyNum[num] = 1;
    }
    
    return false;
};