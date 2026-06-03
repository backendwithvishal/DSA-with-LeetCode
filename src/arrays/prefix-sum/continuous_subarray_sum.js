// 523 question on leetcode 

function checkSubarraySum(nums, k) {
    const remainderMap = new Map();

    // remainder 0 occurs before the array starts
    remainderMap.set(0, -1);

    let prefixSum = 0;

    for (let i = 0; i < nums.length; i++) {
        prefixSum += nums[i];

        const remainder = prefixSum % k;

        if (remainderMap.has(remainder)) {
            const prevIndex = remainderMap.get(remainder);

            if (i - prevIndex >= 2) {
                return true;
            }
        } else {
            // store first occurrence only
            remainderMap.set(remainder, i);
        }
    }

    return false;
}