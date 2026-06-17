// 377 question on Leetcode

var combinationSum4 = function(nums, target) {
    // dp[i] = number of ways to make sum i
    const dp = new Array(target + 1).fill(0);

    // There is 1 way to make sum 0: choose nothing
    dp[0] = 1;

    // Calculate answers from 1 to target
    for (let i = 1; i <= target; i++) {
        // Try every number
        for (let num of nums) {
            // If the number can be used
            if (i >= num) {
                dp[i] += dp[i - num];
            }
        }
    }

    // Return the number of combinations for target
    return dp[target];
};