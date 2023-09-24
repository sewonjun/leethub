/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let result = [];
    const anagramGroup = {}; 
    
    strs.forEach(el => {
        const sortedStrs =  el.split("").sort().join("");
        anagramGroup[sortedStrs] ? anagramGroup[sortedStrs].push(el) : anagramGroup[sortedStrs] = [el];
    });
    
    for (let anagramStr in anagramGroup) {
        result.push(anagramGroup[anagramStr]);
    }
    
    return result;
};



