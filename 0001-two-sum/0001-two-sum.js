/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// var twoSum = function(nums, target) {
//     let returnVal = [];
//     for (let i = 0; i < nums.length - 1; i++) {
//         const firstTarget = nums[i];

//         for (let j = i + 1; j < nums.length; j++) {
//             const secondTarget = nums[j];

//             if ( Number(firstTarget) + Number(secondTarget) === target) {
//                 returnVal = [i ,j];

//                 break;
//             }
//         }
//     }

//     return returnVal;
// };
 

const twoSum = function(nums, target) {
  let firstIndex = 0;
  let lastIndex = nums.length - 1;
  
  while (firstIndex < lastIndex) {
    const sum = nums[firstIndex] + nums[lastIndex];
    if (sum === target) break;
    
    if (lastIndex - 1 === firstIndex) {
      firstIndex++;
      lastIndex = nums.length - 1;
      
      continue;
    }
    
    lastIndex--;
  }
  
  return [firstIndex, lastIndex];
}