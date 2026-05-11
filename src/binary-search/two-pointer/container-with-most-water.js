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