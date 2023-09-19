/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    let result = true;
    
    if (s.length !== t.length) {
        result = false;
        
        return result;
    }
    
    function countChar(word) {
        const wordCount = {};
        const splitedWord = word.split("");
        splitedWord.forEach(el => {
            wordCount[el] ? wordCount[el] += 1 : wordCount[el] = 1;
        })
        
        return wordCount;
    }
    
    const sCountChar = countChar(s);
    const tCountChar = countChar(t);
    
    for (let char in tCountChar) {
        if (sCountChar[char] !== tCountChar[char]) {
            result = false;
            
            break;
        }
    }
    
    return result;
};