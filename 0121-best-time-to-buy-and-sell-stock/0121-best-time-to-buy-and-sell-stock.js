/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let curMin = prices[0];
  let benefits = [Math.max(...prices.slice(1)) - curMin];
  let target = 1;
  
  for (let i = 1; i < prices.length - 1; i++) {
    if (prices[i] > curMin) {
      continue;
    } else {
      curMin = prices[i];
    }
    
    const curMax = Math.max(...prices.slice(i + 1));
    
    if (curMax < curMin){
      continue;
    }
    
    benefits.push(curMax - curMin);
    
    let nextMin = null;
    for (let j = i + 1; j < prices.length - 1; j++) {
      if (prices[j] < curMin) {
        target = j
        nextMin = prices[j];
        break;
      }
    }
    
    if (nextMin === null) {
      break;
    }
  }
  
  return Math.max(...benefits) > 0 ? Math.max(...benefits) : 0 ;
};