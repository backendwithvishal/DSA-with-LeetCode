// 713 question on Leetcode

function numSubarrayProductLessThanK(nums, k) {

    // edge case: k <= 1 means no subarray of positive nums can have product < k
    if (k <= 1) return 0;

    let left    = 0; // left boundary of window
    let product = 1; // running product of current window
    let count   = 0; // total valid subarrays found

    for (let right = 0; right < nums.length; right++) {

        product *= nums[right]; // expand window: multiply right element

        // shrink window from left while product is too large
        while (product >= k) {
            product /= nums[left]; // remove left element from product
            left++;                // shrink window
        }

        // all subarrays ending at 'right' starting from 'left' to 'right' are valid
        // that's exactly (right - left + 1) new subarrays
        count += right - left + 1;
    }

    return count;
}