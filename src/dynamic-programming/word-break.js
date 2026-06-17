// 139 question on Leetcode

var wordBreak = function(s, wordDict) {
    // Convert the word list into a Set for faster lookup
    const wordSet = new Set(wordDict);

    // dp[i] = true if we can build s[0...i-1] using dictionary words
    const dp = new Array(s.length + 1).fill(false);

    // Empty string can always be formed
    dp[0] = true;

    // Check every position in the string
    for (let i = 1; i <= s.length; i++) {
        // Try all possible split points
        for (let j = 0; j < i; j++) {
            // Left part must be valid
            // Right part must be a word in the dictionary
            if (dp[j] && wordSet.has(s.substring(j, i))) {
                dp[i] = true;
                break; // No need to check more splits
            }
        }
    }

    // Can the entire string be formed?
    return dp[s.length];
};