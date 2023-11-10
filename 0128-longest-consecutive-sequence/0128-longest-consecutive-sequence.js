/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    if (!nums.length) return 0;
    
    if (nums.length === 1) return 1;
    
    const sortedNums = nums.sort((a,b) => a-b);
    let startSequence = 0;
    let endSequence = 0;
    let duplicateNums = 0;
    const results = [];
    
    for (let i = 1; i < nums.length; i++) {
        if (i === nums.length -1 && ((sortedNums[i - 1] + 1 === sortedNums[i]))) {
            endSequence = i;
            results.push(endSequence - startSequence - duplicateNums + 1);
            break;
        }
        
        if (i === nums.length - 1 && sortedNums[i - 1] === sortedNums[i]) {
            duplicateNums++;
            endSequence = i;
            
            results.push(endSequence - startSequence - duplicateNums + 1);
            
            break;
        }
        
        if (sortedNums[i - 1] === sortedNums[i]) {
            duplicateNums++;
            endSequence = i;
            
            continue;
        }
        
        if (sortedNums[i - 1] + 1 === sortedNums[i]) {
            endSequence = i;
        } else {
            results.push(endSequence - startSequence - duplicateNums + 1);
            startSequence = i;
            endSequence = i;
            duplicateNums = 0;
        }
    }
    
    return Math.max(...results)
};