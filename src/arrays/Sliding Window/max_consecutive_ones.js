// 485 question on leetcode 

function findMaxConsecutiveOnes(nums) {
    let current = 0; // current streak of consecutive 1s
    let best    = 0; // longest streak seen so far

    for (let i = 0; i < nums.length; i++) {

        if (nums[i] === 1) {
            current++; // extend the current streak
        } else {
            current = 0; // 0 breaks the streak → reset
        }

        // update best after every element — never miss the final streak
        best = Math.max(best, current);
    }

    return best;
}

/*
1. Input:  nums = [1, 1, 0, 1, 1, 1]

   Output: 3

   Explanation: The last three 1s [1,1,1] form the longest consecutive streak.

2. Input:  nums = [1, 0, 1, 1, 0, 1]

   Output: 2

   Explanation: Two streaks of length 2 exist: [1,1] at indices 2–3 and [0,1] at end.
   Best is 2.

3. Input:  nums = [0, 0, 0]

   Output: 0

   Explanation: No 1s in the array → streak never starts → return 0.

❌ Wrong input & output

4. Input:  nums = [1, 1, 1, 0, 1, 1]

   Wrong output: 4   // ❌ the 0 at index 3 breaks the streak
   Correct output: 3  // ✅ longest unbroken streak is [1,1,1] at indices 0–2
*/