// 91 question on Leetcode

function numDecodings(s) {

    // If string starts with 0, it cannot be decoded
    if (s[0] === '0') return 0;

    const n = s.length;

    // dp[i] = number of ways to decode first i characters
    const dp = new Array(n + 1).fill(0);

    // Empty string has 1 way to decode
    dp[0] = 1;

    // First character is already checked to be non-zero
    dp[1] = 1;

    for (let i = 2; i <= n; i++) {

        // Get current single digit
        const oneDigit = Number(s.slice(i - 1, i));

        // If single digit is valid (1-9)
        if (oneDigit >= 1 && oneDigit <= 9) {
            dp[i] += dp[i - 1];
        }

        // Get two-digit number
        const twoDigits = Number(s.slice(i - 2, i));

        // If two digits form a valid letter (10-26)
        if (twoDigits >= 10 && twoDigits <= 26) {
            dp[i] += dp[i - 2];
        }
    }

    return dp[n];
}