/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    const result = [];
    const countFrequency = {};
    
    nums.forEach(el => {
        countFrequency[el] ? countFrequency[el]++ : countFrequency[el] = 1;
    })
    
    while(result.length !== k) {
        let maxCountNumber = null;
        let maxCount = 0;

        for (let el in countFrequency) {
            if (countFrequency[el] > maxCount) {
                maxCountNumber = el;
                maxCount = countFrequency[el];
            }
        }

        countFrequency[maxCountNumber] = 0;
        result.push(maxCountNumber);
    }
    
    return result;
 };