function maxProfit(prices: number[]): number {
  let maximizedProfit = 0;
  let minPrice = prices[0];

  for (let i = 0; i < prices.length; i++) {
    const price = prices[i] - minPrice;

    maximizedProfit = Math.max(price, maximizedProfit);
    minPrice = Math.min(minPrice, prices[i]);
  }

  return maximizedProfit;
};