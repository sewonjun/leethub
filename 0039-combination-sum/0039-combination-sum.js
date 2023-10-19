/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    let ableCandidates = [];
    
    function tempSums(num, reducedArr) {
        let minused = false;
        
        if (num === 0) {
            return ableCandidates.push(reducedArr);
        }
        
        for (let i = 0; i < candidates.length; i++) {
            if (candidates[i] <= num) {
                minused = true;
                tempSums((num - candidates[i]), [...reducedArr, candidates[i]]);
            }
        }
        if (!minused) return;
    }
    
    tempSums(target, []);
    
    const resultObj = ableCandidates.reduce((acc, cur) => {
        const joinedCur = cur.sort().join(",");
        
        acc[joinedCur] ? acc[joinedCur]++ : acc[joinedCur] = 1;
        
        return acc;
    }, {})
    
    return Object.keys(resultObj).map(el => el.split(","));
};



