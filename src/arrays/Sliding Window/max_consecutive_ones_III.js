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

/*
1. Input:  nums = [1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0], k = 2

   Output: 6

   Explanation: Flip the two 0s at indices 5 and 10.
   Window [0,0,0,1,1,1,1,0] → flip indices 5 and 10 → 6 consecutive 1s from index 5 to 10.

2. Input:  nums = [0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1], k = 3

   Output: 10

   Explanation: Flip 3 zeros in the best window to get 10 consecutive 1s.

3. Input:  nums = [1, 1, 1], k = 0

   Output: 3

   Explanation: No flips needed — all are already 1s. Window spans the whole array.

❌ Wrong input & output

4. Input:  nums = [0, 0, 0], k = 1

   Wrong output: 3   // ❌ can only flip 1 zero, not all 3
   Correct output: 1  // ✅ best window has 1 flipped zero → length 1
*/