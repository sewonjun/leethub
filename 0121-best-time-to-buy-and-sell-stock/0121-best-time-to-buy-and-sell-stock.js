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
      console.log("pirce가 curMin보다 큼")
      continue;
    } else {
      curMin = prices[i];
    }
    
    const curMax = Math.max(...prices.slice(i + 1));
    if (curMax < curMin){
      console.log("min보다 max가 작음");
      continue;
    }
    
    benefits.push(curMax - curMin);
    console.log(benefits);
    
    let nextMin = null;
    for (let j = i + 1; j < prices.length - 1; j++) {
      if (prices[j] < curMin) {
        target = j
        console.log(i);
        nextMin = prices[j];
        break;
      }
    }
    
    if (nextMin === null) {
      console.log("더이상 curMin보다 작은수가 없음");
      break;
    }
  }
  
  return Math.max(...benefits) > 0 ? Math.max(...benefits) : 0 ;
};