/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
  let count = 0;
  const result = [];
  const i = new Array(grid.length).fill([]);
  const j = new Array(grid[0].length).fill(0);
  const visitedArray = i.map(el => [...j]);

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === 1 && visitedArray[i][j] === 0) {
        let count = 1;
        visitedArray[i][j] = 1;
        const finalCount = findLand(i, j, count);
        result.push(finalCount)
      }
    }
  }
  
  function findLand(i, j, count) {
    if (j < 0 || i < 0 || j > grid[0].length - 1 || i > grid.length - 1) return count;
    
    if (j > 0 && grid[i][j - 1] === 1 && visitedArray[i][j - 1] === 0) {
      //left
      count++;
      visitedArray[i][j - 1] = 1;
      count += findLand(i, j-1, 0);
    }
    
    if (j < grid[0].length - 1 && grid[i][j + 1] === 1 && visitedArray[i][j + 1] === 0) {
      //right
      count++;
      visitedArray[i][j + 1] = 1;
      count += findLand(i, j+1, 0);
    }
    
    if (i > 0 && grid[i - 1][j] === 1 && visitedArray[i - 1][j] === 0) {
      count++;
      visitedArray[i - 1][j] = 1;
      count += findLand(i - 1, j, 0);
    }
    
    if (i < grid.length - 1 && grid[i + 1][j] === 1 && visitedArray[i + 1][j] === 0) {
      count++;
      visitedArray[i + 1][j] = 1;
      count += findLand(i + 1, j, 0);
    }
    
    return count;
  }
  
  return result.length > 0 ? Math.max(...result) : 0;
};


