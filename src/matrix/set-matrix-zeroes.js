var setZeroes = function(matrix) {
    const rows = matrix.length;
    const cols = matrix[0].length;

    // Check if the first row or first column contains a zero
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

    // Use first row and first column as markers
    for (let r = 1; r < rows; r++) {
        for (let c = 1; c < cols; c++) {
            if (matrix[r][c] === 0) {
                matrix[r][0] = 0; // mark row
                matrix[0][c] = 0; // mark column
            }
        }
    }

    // Set cells to 0 based on the markers
    for (let r = 1; r < rows; r++) {
        for (let c = 1; c < cols; c++) {
            if (matrix[r][0] === 0 || matrix[0][c] === 0) {
                matrix[r][c] = 0;
            }
        }
    }

    // Set the first column to 0 if needed
    if (firstColZero) {
        for (let r = 0; r < rows; r++) {
            matrix[r][0] = 0;
        }
    }

    // Set the first row to 0 if needed
    if (firstRowZero) {
        for (let c = 0; c < cols; c++) {
            matrix[0][c] = 0;
        }
    }
};