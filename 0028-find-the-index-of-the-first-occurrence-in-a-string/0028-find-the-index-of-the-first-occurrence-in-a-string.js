/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
const strStr = function(haystack, needle) {
  let haystackIdx = 0;
  let needleIdx = 0;
  
  while (haystackIdx < haystack.length) {
    if (haystack[haystackIdx] === needle[needleIdx]) {
      haystackIdx++;
      needleIdx++;
    } else if(needleIdx > 0){
      haystackIdx = haystackIdx - needleIdx + 1;
      needleIdx = 0;
    } else {
      haystackIdx++;
    }
    
    if (needleIdx === needle.length) {
      return result = haystackIdx - needle.length;
    };
  }
  
  return -1;
};