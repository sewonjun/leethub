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
        
        if ( numbers[firstPointer] + numbers[secondPointer] === target) {
            result.push(firstPointer + 1, secondPointer + 1)
            
            break;
        }
        
        if (numbers[firstPointer] + numbers[secondPointer] < target) {
            firstPointer++;
            
            continue;
        }
        
        if (numbers[firstPointer] + numbers[secondPointer] > target) {
            secondPointer--;
            
            continue;
        }
    }
    
    return result
};