// 53 question no Leetcode

var maxSubArray = function(nums) {
    // Start with first number
    let currentSum = nums[0];
    let maxSum = nums[0];

    for (let i = 1; i < nums.length; i++) {
        // Either start a new subarray or continue current one
        currentSum = Math.max(nums[i], currentSum + nums[i]);

        // Update maximum sum found so far
        maxSum = Math.max(maxSum, currentSum);
    }

    return maxSum;
};