// 1143 question on Leetcode

var longestCommonSubsequence = function(text1, text2) {
    // Create a table to store answers
    const dp = Array(text1.length + 1)
        .fill(0)
        .map(() => Array(text2.length + 1).fill(0));

    // Fill the table from bottom to top
    for (let i = text1.length - 1; i >= 0; i--) {
        for (let j = text2.length - 1; j >= 0; j--) {

            // If characters match, add 1 to the answer
            if (text1[i] === text2[j]) {
                dp[i][j] = 1 + dp[i + 1][j + 1];
            } else {
                // Otherwise, take the better of the two choices
                dp[i][j] = Math.max(
                    dp[i + 1][j],
                    dp[i][j + 1]
                );
            }
        }
    }

    // Top-left cell contains the final answer
    return dp[0][0];
};