/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    nums = nums.sort((a, b) => a - b);
    const sumZero = {};
    let pointerA = 0;
    
    while (pointerA < nums.length -2) {
        const slicedNums = [...nums.slice(pointerA + 1)];
        let pointerB = 0; 
        let pointerC = slicedNums.length - 1;

        while (pointerB < pointerC) {
            const sumedNums = nums[pointerA] + slicedNums[pointerB] + slicedNums[pointerC];

            if (sumedNums === Number(0)) {
                const key = [nums[pointerA], slicedNums[pointerB], slicedNums[pointerC]].join("");
                sumZero[key] = [nums[pointerA], slicedNums[pointerB], slicedNums[pointerC]];
                pointerB++;
            }
            
            if (sumedNums < 0) {
                pointerB++;
            }
            
            if (sumedNums > 0) {
                pointerC--;
            }
        }
        pointerA++;
    }
    
    const result = [];
    
    for (let el in sumZero) {
        result.push(sumZero[el]);
    }
    
    return result;
};