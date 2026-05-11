// 42 question on leetcode

function trap(height) {
    let left  = 0;                  // left pointer starts at beginning
    let right = height.length - 1;  // right pointer starts at end
    let leftMax  = 0;               // tallest bar seen from the left so far
    let rightMax = 0;               // tallest bar seen from the right so far
    let totalWater = 0;

    while (left < right) {

        if (height[left] <= height[right]) {
            // left side is the bottleneck — process left pointer

            if (height[left] >= leftMax) {
                leftMax = height[left]; // update left max — no water here, it's a wall
            } else {
                totalWater += leftMax - height[left]; // water trapped on top of this bar
            }

            left++; // move left pointer inward

        } else {
            // right side is the bottleneck — process right pointer

            if (height[right] >= rightMax) {
                rightMax = height[right]; // update right max — no water here, it's a wall
            } else {
                totalWater += rightMax - height[right]; // water trapped on top of this bar
            }

            right--; // move right pointer inward
        }
    }

    return totalWater;
}