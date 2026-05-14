// 1004 question on leetcode

function longestOnes(nums, k) {
    let left      = 0; // left boundary of window
    let zeroCount = 0; // number of 0s in current window
    let maxLen    = 0; // longest valid window seen so far

    for (let right = 0; right < nums.length; right++) {

        // expand window by including nums[right]
        if (nums[right] === 0) {
            zeroCount++; // used one flip for this zero
        }

        // window is invalid → too many zeros → shrink from left
        while (zeroCount > k) {
            if (nums[left] === 0) {
                zeroCount--; // leaving element was a 0 → get flip back
            }
            left++; // shrink window from left
        }

        // window is valid → update best (right - left + 1 = window size)
        maxLen = Math.max(maxLen, right - left + 1);
    }

    return maxLen;
}