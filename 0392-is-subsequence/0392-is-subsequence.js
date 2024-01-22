/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
  let curIndex = 0;

  t.split("").forEach(el => {
    if (el === s[curIndex]) {
      curIndex++;
    }
  });
  
  if (curIndex < s.length) {
    return false;
  }
  return true;
};