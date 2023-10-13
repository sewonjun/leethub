/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    const result = s.split(" ").map(el => {
        return el.split("").reverse().join("")
    })
    
    return result.join(" ");
};