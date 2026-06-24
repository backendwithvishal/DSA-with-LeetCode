// 417 question on Leetcode

var pacificAtlantic = function (heights) {
    const rows = heights.length;
    const cols = heights[0].length;

    // Store cells reachable from Pacific Ocean
    const pacific = Array.from({ length: rows }, () =>
        Array(cols).fill(false)
    );

    // Store cells reachable from Atlantic Ocean
    const atlantic = Array.from({ length: rows }, () =>
        Array(cols).fill(false)
    );

    // Directions: up, down, left, right
    const directions = [
        [-1, 0],
        [1, 0],
        [0, -1],
        [0, 1]
    ];

    // DFS to mark reachable cells
    function dfs(row, col, visited) {
        visited[row][col] = true;

        for (const [dr, dc] of directions) {
            const newRow = row + dr;
            const newCol = col + dc;

            // Check boundaries
            if (
                newRow < 0 ||
                newRow >= rows ||
                newCol < 0 ||
                newCol >= cols
            ) {
                continue;
            }

            // Skip if already visited
            if (visited[newRow][newCol]) {
                continue;
            }

            // We can move only to same or higher height
            // because we are traversing from ocean inward
            if (heights[newRow][newCol] < heights[row][col]) {
                continue;
            }

            dfs(newRow, newCol, visited);
        }
    }

    // Start DFS from Pacific borders
    for (let row = 0; row < rows; row++) {
        dfs(row, 0, pacific); // left edge
    }

    for (let col = 0; col < cols; col++) {
        dfs(0, col, pacific); // top edge
    }

    // Start DFS from Atlantic borders
    for (let row = 0; row < rows; row++) {
        dfs(row, cols - 1, atlantic); // right edge
    }

    for (let col = 0; col < cols; col++) {
        dfs(rows - 1, col, atlantic); // bottom edge
    }

    const result = [];

    // Cells reachable from both oceans
    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            if (pacific[row][col] && atlantic[row][col]) {
                result.push([row, col]);
            }
        }
    }

    return result;
};