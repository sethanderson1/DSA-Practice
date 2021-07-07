const buyStocks1 = (stocks) => {
  let min = Infinity;
  let maxProfit = 0;
  for (let i = 0; i < stocks.length; i++) {
    min = Math.min(min, stocks[i]);
    let profit = stocks[i] - min;
    if (profit > maxProfit) {
      maxProfit = profit;
    }
  }
  return maxProfit;
};

const stocks = [2, 5, 1, 2, 4, 9, 3];
const result = buyStocks1(stocks);
console.log("result", result);

module.exports = {
  buyStocks1,
};
