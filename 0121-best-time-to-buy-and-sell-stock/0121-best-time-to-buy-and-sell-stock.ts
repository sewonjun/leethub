function maxProfit(prices: number[]): number {
  let result = 0;
  let minBuy = prices[0];
    
  for (let i = 1; i < prices.length; i ++) {
    console.log(minBuy, result);
    minBuy = Math.min(prices[i], minBuy);
    result = Math.max(prices[i] - minBuy, result);
     // minBuy = Math.min(prices[i], minBuy);
    
    // console.log(minBuy, result, "------------")
  }
  
  return result;
};
