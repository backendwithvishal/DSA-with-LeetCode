// 62 question on Leetcode

function uniquePaths(m, n) {

    // Create a grid filled with 1s
    const dp = Array.from({ length: m }, () => Array(n).fill(1));

    // Start from cell (1,1)
    for (let row = 1; row < m; row++) {

        for (let col = 1; col < n; col++) {

            // Paths = top cell + left cell
            dp[row][col] = dp[row - 1][col] + dp[row][col - 1];
        }
    }

    // Bottom-right cell contains the answer
    return dp[m - 1][n - 1];
}