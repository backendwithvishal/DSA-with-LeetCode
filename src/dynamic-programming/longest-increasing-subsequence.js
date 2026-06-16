// 300 question on Leetcode 

var lengthOfLIS = function(nums) {
    // dp[i] = length of the longest increasing subsequence ending at index i
    const dp = new Array(nums.length).fill(1);

    let longest = 1;

    // Check each number
    for (let i = 1; i < nums.length; i++) {
        // Compare with all previous numbers
        for (let j = 0; j < i; j++) {
            // If nums[i] can be added after nums[j]
            if (nums[i] > nums[j]) {
                dp[i] = Math.max(dp[i], dp[j] + 1);
            }
        }

        // Keep track of the longest subsequence found so far
        longest = Math.max(longest, dp[i]);
    }

    // Return the length of the longest increasing subsequence
    return longest;
};

