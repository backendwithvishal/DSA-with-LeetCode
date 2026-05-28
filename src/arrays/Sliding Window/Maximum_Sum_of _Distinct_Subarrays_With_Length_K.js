// 2461 question on Leetcode
function maximumSubarraySum(nums, k) {
    const freq   = new Map(); // element → frequency in current window
    let sum      = 0;         // running sum of current window
    let maxSum   = 0;         // best valid window sum seen so far

    for (let right = 0; right < nums.length; right++) {

        // STEP 1: add right element into window
        freq.set(nums[right], (freq.get(nums[right]) || 0) + 1);
        sum += nums[right];

        // STEP 2: if window is bigger than k → remove leftmost element
        if (right >= k) {
            const leftElem = nums[right - k]; // element leaving the window
            sum -= leftElem;                  // subtract from running sum

            freq.set(leftElem, freq.get(leftElem) - 1); // decrease its count

            // if count hits 0 → this element is gone from window → remove from map
            if (freq.get(leftElem) === 0) {
                freq.delete(leftElem);
            }
        }

        // STEP 3: window is exactly size k AND all elements distinct → update best
        if (right >= k - 1 && freq.size === k) {
            maxSum = Math.max(maxSum, sum);
        }
    }

    // return 0 if no valid window was ever found
    return maxSum;
}