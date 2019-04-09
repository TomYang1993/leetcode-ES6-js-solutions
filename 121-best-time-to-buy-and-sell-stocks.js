/**
 * @param {number[]} prices
 * @return {number}
 */

 
var maxProfit = function(prices) {
    
    if(prices.length < 2){
        return 0
    }
    let max = 0
    let currentMinPrice = prices[0]
    for(let i =1; i< prices.length; i++) {
        if(prices[i] > currentMinPrice) {
           max = Math.max(max, prices[i] - currentMinPrice)
        }else {
           currentMinPrice = prices[i] 
        }
    }
    return max
};


//brutal force

var maxProfit = function(prices) {
    let max = 0
    for(let i =0; i< prices.length; i++) {
        for(let j = i+1; j < prices.length; j++) {
            if(prices[j] - prices[i] > max) {
                max = prices[j] - prices[i];
            }
        }
    }
    return max
};