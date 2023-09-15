/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
const insert = function(intervals, newInterval) {
    const intervalsArray = [];
    
    const needSortingArray = []; 
    
    intervals.forEach(arr => {
        if (arr[0] <= newInterval[0] && newInterval[0] <= arr[1] || arr[0] <= newInterval[1] && newInterval[1] <= arr[1] || newInterval[0] <= arr[0] &&  arr[0] <= newInterval[1] || newInterval[0] <= arr[1] &&  arr[1] <= newInterval[1]) {
            return needSortingArray.push(...arr);
        }
        
        intervalsArray.push(arr);
    })
    
    needSortingArray.push(...newInterval);
    
    const sortedArray = needSortingArray.sort((a, b) => a - b);
    
    const newIntervalResult = [sortedArray[0], sortedArray.at(-1)];
    
    intervalsArray.push(newIntervalResult);
    
    intervalsArray.sort((a, b) => {
        if (a[0] < b[0]) return -1;
        
        if (a[0] < b[0]) return 1;
        
        return 0;
    })
    
    return intervalsArray;
};