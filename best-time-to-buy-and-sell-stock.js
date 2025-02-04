/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let minPrice = Infinity;
  let maxSale = 0;

  for (let price of prices) {
    minPrice = Math.min(minPrice, price)
    maxSale = Math.max(maxSale, price - minPrice)
  }
  return maxSale
};

console.log(maxProfit([7,1,5,3,6,4]));
console.log(maxProfit([7,6,4,3,1]));