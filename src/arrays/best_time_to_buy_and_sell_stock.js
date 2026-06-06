// 121 question on Leetcode

function maxProfit(prices) {

  let minPrice  = Infinity;  // cheapest buy price seen so far
  let maxProfit = 0;         // best profit seen so far (0 = no transaction)

  for (let i = 0; i < prices.length; i++) {

    // Found a cheaper day to buy → update minPrice
    if (prices[i] < minPrice) {
      minPrice = prices[i];
    }

    // Calculate profit if we sell today
    const profit = prices[i] - minPrice;

    // If today's profit beats our best → update maxProfit
    if (profit > maxProfit) {
      maxProfit = profit;
    }

  }

  // If prices only fell, maxProfit stays 0 → correct answer
  return maxProfit;
}