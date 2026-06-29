// 84 question on Leetcode

var largestRectangleArea = function (heights) {
    // Stack will store indexes of histogram bars
    const stack = [];

    // Variable to store the maximum rectangle area
    let maxArea = 0;

    // Loop through all bars
    // We go one step extra (i <= heights.length)
    // to process any remaining bars in the stack.
    for (let i = 0; i <= heights.length; i++) {

        // Current height
        // For the extra iteration, use height = 0
        // so that all remaining bars are removed.
        const currentHeight = (i === heights.length) ? 0 : heights[i];

        // If current bar is smaller than the last stacked bar,
        // calculate the rectangle area.
        while (
            stack.length > 0 &&
            currentHeight < heights[stack[stack.length - 1]]
        ) {
            // Height of the rectangle
            const height = heights[stack.pop()];

            // Find the width of the rectangle
            let width;

            // If stack becomes empty,
            // rectangle starts from index 0.
            if (stack.length === 0) {
                width = i;
            } else {
                // Rectangle lies between current index
                // and the previous smaller element.
                width = i - stack[stack.length - 1] - 1;
            }

            // Calculate current area
            const area = height * width;

            // Update maximum area
            maxArea = Math.max(maxArea, area);
        }

        // Store current index in the stack
        stack.push(i);
    }

    // Return the largest rectangle area
    return maxArea;
};