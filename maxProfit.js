let maxP = -1;
const maxProfit = function(arr) {
  const prices = arr.slice(1);
  let currentP = getProfit(arr[0], prices);
  if (currentP > maxP) maxP = currentP;

  if (prices.length) maxProfit(prices);

  return maxP;
};


// get the biggest prices after lowest prices
const getProfit = function(current, prices) {
  let currentProfit = -1;
  for (const price of prices) {
    if (price - current > currentProfit) currentProfit = price - current;
  }
  return currentProfit;
};


// const prices = [45, 24, 35, 31, 40, 38, 11];
const prices = [16, 24, 34, 45, 11, 20];
console.log(maxProfit(prices));
