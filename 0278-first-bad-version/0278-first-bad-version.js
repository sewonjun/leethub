/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
      let pivot = Math.ceil(n / 2);
      let badVersion;
      
      while(true) {
        if (!isBadVersion(pivot) && badVersion) break;
        
        if (isBadVersion(pivot)) {
          //이미 나쁜 버전은 찾았고, 시작점을 찾아야 함.
          badVersion = true;
          
          pivot--;
        } else {
          pivot = pivot + Math.ceil((n - pivot)/2);
        }
      }
      
      return pivot + 1;
    };
};