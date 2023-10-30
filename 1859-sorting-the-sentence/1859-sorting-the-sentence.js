/**
 * @param {string} s
 * @return {string}
 */
const sortSentence = function(s) {
    const splitedS = s.split(" ");
    const sortedS = splitedS.sort((a, b) => {
        if (a[a.length - 1] < b[b.length - 1]) return -1;
        
        if (a[a.length - 1] > b[b.length - 1]) return 1;
    });
    
    const result = sortedS.map(el => {
        const noNumSentence = el.slice(0, el.length - 1);
        
        return noNumSentence
    }).join(" ");
    
    return result;
};