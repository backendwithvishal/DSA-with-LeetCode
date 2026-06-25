// 79 question on Leetcode


var exist = function(board, word) {
    let rows = board.length;
    let cols = board[0].length;

    function dfs(row, col, index) {
        // Word found
        if (index === word.length) return true;

        // Invalid position or character doesn't match
        if (
            row < 0 ||
            row >= rows ||
            col < 0 ||
            col >= cols ||
            board[row][col] !== word[index]
        ) {
            return false;
        }

        // Mark current cell as visited
        let temp = board[row][col];
        board[row][col] = "#";

        let found =
            dfs(row + 1, col, index + 1) ||
            dfs(row - 1, col, index + 1) ||
            dfs(row, col + 1, index + 1) ||
            dfs(row, col - 1, index + 1);

        // Restore original value
        board[row][col] = temp;

        return found;
    }

    // Start DFS from every cell
    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            if (dfs(row, col, 0)) {
                return true;
            }
        }
    }

    return false;
};