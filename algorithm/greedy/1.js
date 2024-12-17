// - 贪心策略
// - 局部最优解
// - 全局最优解

function coinChangeGreedy(coins,amt){
    // 假设coins 是有序的 升序
    let i = coins.length - 1;
    let count =0;
    while(amt>0){  // 还要找零
       while(i>0 && coins[i]>amt){
        i--;
       }
       amt -= coins[i];
       count++;
    }
    return amt === 0 ? count: -1;

}
// console.log(coinChangeGreedy([1,5,10,20,50,100],131));
// // 贪心策略不适合,
// // coinChange([1,20,50],60);
console.log(coinChangeGreedy([2,5],3));
