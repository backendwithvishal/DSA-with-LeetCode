// 200 question on Leetcode

var numIslands = function (grid) {
    // Get the number of rows and columns
    const rows = grid.length;
    const cols = grid[0].length;

    // Store the total number of islands
    let islandCount = 0;

    // DFS function to visit all connected land cells
    function dfs(row, col) {
        // Stop if outside the grid
        if (
            row < 0 ||
            row >= rows ||
            col < 0 ||
            col >= cols
        ) {
            return;
        }

        // Stop if current cell is water
        if (grid[row][col] === "0") {
            return;
        }

        // Mark the current land as visited
        grid[row][col] = "0";

        // Visit all 4 neighboring cells
        dfs(row - 1, col); // Up
        dfs(row + 1, col); // Down
        dfs(row, col - 1); // Left
        dfs(row, col + 1); // Right
    }

    // Traverse every cell in the grid
    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {

            // Found a new island
            if (grid[row][col] === "1") {
                islandCount++;

                // Visit the entire island
                dfs(row, col);
            }
        }
    }

    // Return the total number of islands
    return islandCount;
};