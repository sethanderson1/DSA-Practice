const buyStocks2 = (stocks) => {
  let l = 0;
  let r = 1;
  let profit = 0;

  while (l < stocks.length - 1) { 
    if (stocks[r] > stocks[l]) {
      profit += stocks[r] - stocks[l];
      l = r;
      r = r + 1;
      if (r >= stocks.length) {
        return profit;
      }
    } else {
      l++
      r++
    }
  }

  return profit;
};

const stocks = [7, 1, 5, 4, 3, 4, 6, 4];
//                 l  r
const result = buyStocks2(stocks);
console.log("result", result);

module.exports = {
  buyStocks2,
};
