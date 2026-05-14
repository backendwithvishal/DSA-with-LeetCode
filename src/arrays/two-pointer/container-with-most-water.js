// 11 question number om leetcode

function maxArea(height) {
    let left  = 0;                   // left pointer starts at beginning
    let right = height.length - 1;   // right pointer starts at end
    let maxWater = 0;                // track the best answer

    while (left < right) {
        const width = right - left;                         // distance between two walls
        const h     = Math.min(height[left], height[right]); // shorter wall is the limit
        const water = width * h;                            // area of current container

        maxWater = Math.max(maxWater, water); // update best if current is better

        // move the shorter wall inward only way to possibly find more water
        if (height[left] <= height[right]) {
            left++;   // left is shorter (or equal) move left inward
        } else {
            right--;  // right is shorter move right inward
        }
    }

    return maxWater;
}

/*
1. Input:  height = [1, 8, 6, 2, 5, 4, 8, 3, 7]

   Output: 49

   Explanation: Best container uses walls at index 1 (height 8) and index 8 (height 7).
   Width = 8 - 1 = 7, height = min(8, 7) = 7. Area = 7 × 7 = 49.

2. Input:  height = [1, 1]

   Output: 1

   Explanation: Only two walls. Width = 1, height = min(1,1) = 1. Area = 1.

3. Input:  height = [4, 3, 2, 1, 4]

   Output: 16

   Explanation: Best container uses walls at index 0 (height 4) and index 4 (height 4).
   Width = 4, height = 4. Area = 4 × 4 = 16.

❌ Wrong input & output

4. Input:  height = [1, 2, 4, 3]

   Wrong output: 4   // ❌ used walls at index 1 and 3 → width=2, height=min(2,3)=2 → area=4
   Correct output: 4  // ✅ actually correct — but wrong if you picked index 0 and 3 → min(1,3)×3=3
   
   Wrong output: 3   // ❌ picked the tallest bar (4) but ignored that width matters
*/