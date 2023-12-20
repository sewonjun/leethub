/**
 * @param {number[]} prices
 * @param {number} money
 * @return {number}
 */
var buyChoco = function(prices, money) {
  let leftOver = -1;
    for(let i = 0; i < prices.length - 1; i++) {
      for (let j = 1; j < prices.length; j++) {
        if (i === j) continue;
        
        if ((prices[i] + prices[j]) <= money) {
          
          const curLeft = money - (prices[i] + prices[j]);
          if (leftOver === -1) leftOver = curLeft;
          if (curLeft > leftOver) leftOver = curLeft;
        }
      }
    }
  
  return leftOver >= 0 ? leftOver : money
};