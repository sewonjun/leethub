/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    const reversedX = String(x).split("").reverse().join("");
    
    if (x === Number(reversedX)) return true;
    
    return false;  
};

