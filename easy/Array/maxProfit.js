/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let res = 0;
    let min = prices[0];

    for(let i = 1; i < prices.length; i++){
       if(prices[i] > min){
        res = Math.max(res, prices[i] - min);
       }else{
        min = prices[i];
       }
    }
   return res
};

module.exports = maxProfit