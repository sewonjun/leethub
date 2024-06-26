/**
 * @param {string} s
 * @return {boolean}
 */
const isPalindrome = function(s) {
    const filteredS = s.split("").filter(el => {
      const charcodeEl = el.charCodeAt();
      
      if (charcodeEl >= 65 && charcodeEl <= 90 || charcodeEl >= 97 && charcodeEl <= 122 || charcodeEl >= 48 && charcodeEl <= 57) {
        return el;
      }
    })
  
    let frontIdx = 0;
    let backIdx = filteredS.length - 1;
  
    while (frontIdx <= backIdx) {
      if (filteredS[frontIdx].toLowerCase() !== filteredS[backIdx].toLowerCase()) {
        return false;
        // break;
      }
      
      frontIdx++;
      backIdx--;
    }
  
    return true;
};