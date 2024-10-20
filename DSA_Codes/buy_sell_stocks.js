// Stock Buy and Sell – Max one Transaction Allowed

// Given an array prices[] of length N, representing the prices of the stocks on different days, 
// the task is to find the maximum profit possible by buying and selling the stocks on different days 
// when at most one transaction is allowed. Here one transaction means 1 buy + 1 Sell.

// Note: Stock must be bought before being sold.

// Examples:

// Input: prices[] = {7, 10, 1, 3, 6, 9, 2}
// Output: 8
// Explanation: Buy for price 1 and sell for price 9. 


// Input: prices[] = {7, 6, 4, 3, 1} 
// Output: 0
// Explanation: Since the array is sorted in decreasing order, 0 profit can be made without making any transaction.

// Input: prices[] = {1, 3, 6, 9, 11} 
// Output: 10
// Explanation: Since the array is sorted in increasing order, we can make maximum profit by buying at price[0] and 
// selling at price[n-1]








let prices = [7,1,5,3,6,4];

let buyPrice = prices[0];
//at starting the profit will be 0
let maxProfit=0;

for(let i=1;i<prices.length;i++){
    //if todays price is less than the buying price , we'll update the today's price to current buying price
    if(prices[i]<buyPrice){
        buyPrice=prices[i]
    }
    else{
        //if the todays price is greater than the buying price , then we can get profit
        let currProfit = prices[i] - buyPrice;
        maxProfit = Math.max(currProfit,maxProfit);
    }
}
console.log(maxProfit);