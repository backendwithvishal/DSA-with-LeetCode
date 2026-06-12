// 268 question on Leetcode 

var missingNumber = function(nums) {
    // Start with n because numbers should be from 0 to n
    let result = nums.length;

    // XOR all indexes and all numbers
    for (let i = 0; i < nums.length; i++) {
        result ^= i;
        result ^= nums[i];
    }

    // The remaining value is the missing number
    return result;
};