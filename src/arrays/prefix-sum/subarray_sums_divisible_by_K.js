// 974 question on Leetcode 

var subarraysDivByK = function(nums, k) {
    // Store how many times each remainder appears
    const remainderCount = new Map();

    // Remainder 0 appears once before we start
    remainderCount.set(0, 1);

    let prefixSum = 0;
    let result = 0;

    for (let num of nums) {
        // Add current number to running sum
        prefixSum += num;

        // Get remainder when dividing by k
        let remainder = prefixSum % k;

        // Fix negative remainders
        if (remainder < 0) {
            remainder += k;
        }

        // If this remainder was seen before,
        // those previous positions form valid subarrays
        if (remainderCount.has(remainder)) {
            result += remainderCount.get(remainder);
        }

        // Record this remainder for future subarrays
        remainderCount.set(
            remainder,
            (remainderCount.get(remainder) || 0) + 1
        );
    }

    // Return total number of valid subarrays
    return result;
};