// 198 question on Leetcode

var rob = function(nums) {
    // Handle small cases
    if (nums.length === 1) {
        return nums[0];
    }

    let robPrev = 0;      // Best amount up to house i-2
    let robCurrent = 0;   // Best amount up to house i-1

    for (let money of nums) {
        // Choose the better option:
        // 1. Rob this house
        // 2. Skip this house
        const temp = Math.max(
            robPrev + money,
            robCurrent
        );

        robPrev = robCurrent;
        robCurrent = temp;
    }

    // Maximum money we can rob
    return robCurrent;
};