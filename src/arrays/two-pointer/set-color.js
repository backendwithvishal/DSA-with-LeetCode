// 75 question on leetcode

function sortColors(nums) {
    let low  = 0;               // next slot for 0 (red)
    let mid  = 0;               // current element being examined
    let high = nums.length - 1; // next slot for 2 (blue)

    while (mid <= high) {

        if (nums[mid] === 0) {
            // 0 belongs at the front → swap with low
            [nums[low], nums[mid]] = [nums[mid], nums[low]];
            low++;  // front boundary moves right
            mid++;  // safe to move mid (swapped value is always 1 or already seen 0)

        } else if (nums[mid] === 1) {
            // 1 is already in the correct middle zone → just move on
            mid++;

        } else {
            // 2 belongs at the back → swap with high
            [nums[mid], nums[high]] = [nums[high], nums[mid]];
            high--; // back boundary moves left
            // do NOT move mid — swapped value is unknown, must check it next!
        }
    }
}

/*
1. Input:  nums = [2, 0, 2, 1, 1, 0]

   Output: [0, 0, 1, 1, 2, 2]

   Explanation: Dutch National Flag algorithm sorts 0s, 1s, 2s in one pass.
   0s go to the front, 2s go to the back, 1s stay in the middle.

2. Input:  nums = [2, 0, 1]

   Output: [0, 1, 2]

   Explanation: One of each — sorted in a single pass.

3. Input:  nums = [0]

   Output: [0]

   Explanation: Single element — nothing to sort.

❌ Wrong input & output

4. Input:  nums = [1, 2, 0]

   Wrong output: [0, 2, 1]   // ❌ 2 and 1 not sorted — only 0 was moved
   Correct output: [0, 1, 2]  // ✅ all three values correctly placed
*/