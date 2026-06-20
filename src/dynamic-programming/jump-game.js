// 55 Question on Leetcode

var canJump = function(nums) {
    // Furthest index we can reach so far
    let maxReach = 0;

    // Check each position
    for (let i = 0; i < nums.length; i++) {
        // If we can't even reach this position
        if (i > maxReach) {
            return false;
        }

        // Update the furthest position we can reach
        maxReach = Math.max(maxReach, i + nums[i]);
    }

    // We can reach the last index
    return true;
};