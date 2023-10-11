/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let i = 0;
    let j = height.length - 1;
    let result = null;
    
    while (i < j) {
        if (result === null) result = containerSize(i, j, height);
        
        if (result < containerSize(i, j, height)) result = containerSize(i, j, height);
        
        if (height[i] < height[j]) {
            i++;
        } else {
            j--;
        }
    }
    
    return result;
};

function containerSize(i, j, array) {
    const height = Math.min(array[i], array[j]);
    const width = j - i;
    
    return height * width;
}