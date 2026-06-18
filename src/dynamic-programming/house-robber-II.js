// 213 question on Leetcode

var rob = function(nums) {
    // If there is only one house
    if (nums.length === 1) {
        return nums[0];
    }

    // House Robber I logic
    function robLine(houses) {
        let prev2 = 0; // Best amount up to i-2
        let prev1 = 0; // Best amount up to i-1

        for (let money of houses) {
            const current = Math.max(
                prev1,         // Skip this house
                prev2 + money  // Rob this house
            );

            prev2 = prev1;
            prev1 = current;
        }

        return prev1;
    }

    // Case 1: Exclude the last house
    const case1 = robLine(nums.slice(0, nums.length - 1));

    // Case 2: Exclude the first house
    const case2 = robLine(nums.slice(1));

    // Return the better result
    return Math.max(case1, case2);
};