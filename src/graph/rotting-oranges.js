// 994 question on Leetcode

var orangesRotting = function (grid) {
    // Get the number of rows and columns
    const rows = grid.length;
    const cols = grid[0].length;

    // Queue to store all rotten oranges
    const queue = [];

    // Count the number of fresh oranges
    let freshOranges = 0;

    // Check every cell in the grid
    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {

            // Add rotten oranges to the queue
            if (grid[row][col] === 2) {
                queue.push([row, col]);
            }

            // Count fresh oranges
            if (grid[row][col] === 1) {
                freshOranges++;
            }
        }
    }

    // If there are no fresh oranges, no time is needed
    if (freshOranges === 0) {
        return 0;
    }

    // Directions: Up, Down, Left, Right
    const directions = [
        [-1, 0],
        [1, 0],
        [0, -1],
        [0, 1]
    ];

    // Store the total minutes
    let minutes = 0;

    // Perform BFS
    while (queue.length > 0 && freshOranges > 0) {

        // Process all oranges that are rotten at the current minute
        const currentLevelSize = queue.length;

        for (let i = 0; i < currentLevelSize; i++) {

            // Remove the first rotten orange
            const [row, col] = queue.shift();

            // Check all 4 directions
            for (const [rowMove, colMove] of directions) {

                const newRow = row + rowMove;
                const newCol = col + colMove;

                // Skip if outside the grid
                if (
                    newRow < 0 ||
                    newRow >= rows ||
                    newCol < 0 ||
                    newCol >= cols
                ) {
                    continue;
                }

                // Skip if the orange is not fresh
                if (grid[newRow][newCol] !== 1) {
                    continue;
                }

                // Make the fresh orange rotten
                grid[newRow][newCol] = 2;

                // One less fresh orange remaining
                freshOranges--;

                // Add the newly rotten orange to the queue
                queue.push([newRow, newCol]);
            }
        }

        // One minute has passed
        minutes++;
    }

    // If fresh oranges are still left, it is impossible
    if (freshOranges > 0) {
        return -1;
    }

    // Return the total minutes needed
    return minutes;
};