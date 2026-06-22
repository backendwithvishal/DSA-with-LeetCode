// 48 question on Leetcode

var rotate = function(matrix) {
    const n = matrix.length;

    // Step 1: Transpose the matrix
    // Convert rows into columns
    for (let row = 0; row < n; row++) {
        for (let col = row + 1; col < n; col++) {
            [matrix[row][col], matrix[col][row]] =
            [matrix[col][row], matrix[row][col]];
        }
    }

    // Step 2: Reverse each row
    for (let row = 0; row < n; row++) {
        matrix[row].reverse();
    }
};
