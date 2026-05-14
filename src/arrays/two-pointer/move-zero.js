// 283 question on leetcode 

function moveZeroes(nums) {
    let slow = 0; //  next position to place a non-zero element

    // fast pointer scans every element in the array
    for (let fast = 0; fast < nums.length; fast++) {

        // only act when fast finds a non-zero element
        if (nums[fast] !== 0) {

            // swap: non-zero goes to slow is position
            //       zero at slow goes to fast's position
            [nums[slow], nums[fast]] = [nums[fast], nums[slow]];

            slow++; // slow moves forward  next slot is ready
        }
        // if nums[fast] is 0 → do nothing, just let fast keep scanning
    }
}

/*
1. Input:  nums = [0, 1, 0, 3, 12]

   Output: [1, 3, 12, 0, 0]

   Explanation: Non-zeros (1, 3, 12) move to the front in order. Zeros fill the end.

2. Input:  nums = [0, 0, 1]

   Output: [1, 0, 0]

   Explanation: 1 swaps with the first 0. Zeros stay at the end.

3. Input:  nums = [1, 2, 3]

   Output: [1, 2, 3]

   Explanation: No zeros — nothing to move, array unchanged.

❌ Wrong input & output

4. Input:  nums = [0, 1, 0, 3]

   Wrong output: [0, 0, 1, 3]   // ❌ zeros moved to front instead of back
   Correct output: [1, 3, 0, 0]  // ✅ non-zeros first, zeros at the end
*/