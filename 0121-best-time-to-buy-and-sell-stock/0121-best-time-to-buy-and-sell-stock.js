/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = function(prices) {
  let buyIdx = 0;
  let sellIdx = 1;
  let benefit = 0;
  
  while (sellIdx < prices.length) {
    if (prices[buyIdx] > prices[sellIdx]) buyIdx = sellIdx;
    
    if (benefit < prices[sellIdx] - prices[buyIdx]) benefit = prices[sellIdx] - prices[buyIdx];
    
    sellIdx++;
  }
  
  return benefit;
};