/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  if (!s.length) return 0;
  
  if (!s.trim().length || s.length === 1) return 1;
  
  let longestString = 0;
  let subString = {};
  let count = 0;
  let targetIdx = 0;
  
  while(targetIdx < s.length) {
    if ((targetIdx + count)  > s.length - 1) {
      break;
    }
    
    if (subString[s[targetIdx + count]] === 1) {
      
      if (longestString < count) longestString = count;
      
      subString = {};
      count = 0;
      targetIdx++;
    } else {
      subString[s[targetIdx + count]] = 1;
      count++;
    }
  }
  
  if (longestString < count) longestString = count;
  
  return longestString;
};