// Function to set matrix rows and columns to zero if an element is zero
var setZeroes = function(matrix) { 
    const rows = matrix.length;
    const cols = matrix[0].length;

    // Check if any zero is present in the first row or first column
    let firstRowZero = false;
    let firstColZero = false;

    for (let r = 0; r < rows; r++) {
        if (matrix[r][0] === 0) {
            firstColZero = true;
        }
    }

    for (let c = 0; c < cols; c++) {
        if (matrix[0][c] === 0) {
            firstRowZero = true;
        }
    }

    // Use first row and column as markers for rows/columns to be zeroed
    for (let r = 1; r < rows; r++) {
        for (let c = 1; c < cols; c++) {
            if (matrix[r][c] === 0) {
                matrix[r][0] = 0; // mark row
                matrix[0][c] = 0; // mark column
            }
        }
    }

    // Set cells to zero according to the markers
    for (let r = 1; r < rows; r++) {
        for (let c = 1; c < cols; c++) {
            if (matrix[r][0] === 0 || matrix[0][c] === 0) {
                matrix[r][c] = 0;
            }
        }
    }

    // Zero out first column if any zero was found
    if (firstColZero) {
        for (let r = 0; r < rows; r++) {
            matrix[r][0] = 0;
        }
    }

    // Zero out first row if any zero was found
    if (firstRowZero) {
        for (let c = 0; c < cols; c++) {
            matrix[0][c] = 0;
        }
    }
};