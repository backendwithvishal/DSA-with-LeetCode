// 42 question number om leetcode

function trap(height) {
    let left  = 0;                  // left pointer starts at beginning
    let right = height.length - 1;  // right pointer starts at end
    let leftMax  = 0;               // tallest bar seen from the left so far
    let rightMax = 0;               // tallest bar seen from the right so far
    let totalWater = 0;

    while (left < right) {

        if (height[left] <= height[right]) {
            // left side is the bottleneck process left pointer

            if (height[left] >= leftMax) {
                leftMax = height[left]; // update left max no water here it is a wall
            } else {
                totalWater += leftMax - height[left]; // water trapped on top of this bar
            }

            left++; // move left pointer inward

        } else {
            // right side is the bottleneck process right pointer

            if (height[right] >= rightMax) {
                rightMax = height[right]; // update right max  no water here it is a wall
            } else {
                totalWater += rightMax - height[right]; // water trapped on top of this bar
            }

            right--; // move right pointer inward
        }
    }

    return totalWater;
}

/*
1. Input:  height = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]

   Output: 6

   Explanation: Water is trapped in the valleys between the bars.
   Total trapped = 6 units.

2. Input:  height = [4, 2, 0, 3, 2, 5]

   Output: 9

   Explanation:
   Bar 1 (h=2): leftMax=4, rightMax=5 → trapped = 4-2 = 2
   Bar 2 (h=0): leftMax=4, rightMax=5 → trapped = 4-0 = 4
   Bar 3 (h=3): leftMax=4, rightMax=5 → trapped = 4-3 = 1
   Bar 4 (h=2): leftMax=4, rightMax=5 → trapped = 4-2 = 2
   Total = 2 + 4 + 1 + 2 = 9

3. Input:  height = [3, 0, 3]

   Output: 3

   Explanation: Middle bar (h=0) is bounded by walls of height 3 on both sides.
   Trapped = min(3,3) - 0 = 3.

❌ Wrong input & output

4. Input:  height = [1, 0, 1]

   Wrong output: 0   // ❌ forgot to check both sides — middle bar can trap water
   Correct output: 1  // ✅ min(1,1) - 0 = 1 unit of water trapped
*/