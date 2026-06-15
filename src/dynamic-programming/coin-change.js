// 332 question on Leetcode

var coinChange = function(coins, amount) {
    // dp[i] = minimum coins needed to make amount i
    const dp = new Array(amount + 1).fill(Infinity);

    // It takes 0 coins to make amount 0
    dp[0] = 0;

    // Check every amount from 1 to target amount
    for (let i = 1; i <= amount; i++) {
        // Try every coin
        for (let coin of coins) {
            // If the coin can be used
            if (i >= coin) {
                // Take the smaller value:
                // current answer OR
                // 1 coin + answer for the remaining amount
                dp[i] = Math.min(dp[i], dp[i - coin] + 1);
            }
        }
    }

    // If amount cannot be made, return -1
    return dp[amount] === Infinity ? -1 : dp[amount];
};