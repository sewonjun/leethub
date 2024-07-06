function maxProfit(prices: number[]): number {
  let result = 0;
  let minBuy = prices[0];
  let maxSell = prices[1];
  
  for (let i = 1; i < prices.length; i ++) {
    result = Math.max(prices[i] - minBuy, result);
    minBuy = Math.min(prices[i], minBuy);
  }
  
  return result;
};

//앞에가 뒤에보다 크면, 무효 
// 