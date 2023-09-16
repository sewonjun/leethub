/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function(numbers, target) {
    const result = [];
    
    let firstPointer = 0;
    let secondPointer = numbers.length - 1;
    
    while (true) {
        const sumTwoPointer = numbers[firstPointer] + numbers[secondPointer];
        if ( sumTwoPointer === target) {
            result.push(firstPointer + 1, secondPointer + 1)
            
            break;
        }
        
        if (sumTwoPointer < target) {
            firstPointer++;
            
            continue;
        }
        
        if (sumTwoPointer > target) {
            secondPointer--;
            
            continue;
        }
    }
    
    return result
};