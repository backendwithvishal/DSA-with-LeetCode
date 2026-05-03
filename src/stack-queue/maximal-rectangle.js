// 85 question on leetcode

var maximalRectangle = function(matrix) {
  if (!matrix.length || !matrix[0].length) return 0;

  const cols = matrix[0].length;
  // heights[i] = number of consecutive 1s ending at current row in column i
  const heights = new Array(cols).fill(0);
  let maxArea = 0;

  for (let row = 0; row < matrix.length; row++) {

    // Step 1: Update heights for this row
    for (let col = 0; col < cols; col++) {
      if (matrix[row][col] === "1") {
        heights[col] += 1; // extend the bar upward
      } else {
        heights[col] = 0;  // reset — a 0 breaks the streak
      }
    }

    // Step 2: Find largest rectangle in this histogram
    maxArea = Math.max(maxArea, largestRectangle(heights));
  }

  return maxArea;
};


function largestRectangle(heights) {
  // Stack stores indices of bars in increasing height order
  const stack = [];
  let maxArea = 0;

  // We add a 0 sentinel at the end to flush all remaining bars in stack
  const bars = [...heights, 0];

  for (let i = 0; i < bars.length; i++) {

    // When current bar is SHORTER than stack top,
    // the stack top bar can't extend further right → calculate its area
    while (stack.length > 0 && bars[i] < bars[stack[stack.length - 1]]) {
      const height = bars[stack.pop()];         // height of the popped bar

      // Width: from current i (right boundary) to new stack top (left boundary)
      const width = stack.length === 0
        ? i                                     // no left boundary → extends to start
        : i - stack[stack.length - 1] - 1;     // gap between current and new top

      maxArea = Math.max(maxArea, height * width);
    }

    // Push current index — we'll calculate its area later
    stack.push(i);
  }

  return maxArea;
}

/**
1. Input:
matrix = [
  ["1","0","1","0","0"],
  ["1","0","1","1","1"],
  ["1","1","1","1","1"],
  ["1","0","0","1","0"]
]

Output:
6

Explanation:
Step-by-step explanation

Row 0 → heights = [1,0,1,0,0] → max area = 1  
Row 1 → heights = [2,0,2,1,1] → max area = 3  
Row 2 → heights = [3,1,3,2,2] → max area = 6 ✅  
Row 3 → heights = [4,0,0,3,0] → max area still = 6  

Final answer = 6

2. Input:
matrix = [
  ["0","1"],
  ["1","0"]
]

Output:
1

Explanation:
Step-by-step explanation

Row 0 → heights = [0,1] → max area = 1  
Row 1 → heights = [1,0] → max area = 1  

Final answer = 1


❌ wrong input & output

3. Input:
matrix = []

Output:
0

Explanation:

matrix.length = 0 → early return 0

This is not a bug, but an edge case handled correctly.
 */