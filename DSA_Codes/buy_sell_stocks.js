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