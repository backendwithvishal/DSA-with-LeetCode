/// 338 question on Leetcode

var countBits = function(n) {
    // Create an array to store answers from 0 to n
    const result = new Array(n + 1).fill(0);

    // Calculate the number of 1 bits for each number
    for (let i = 1; i <= n; i++) {
        // i >> 1 removes the last bit
        // i & 1 checks if the last bit is 1
        result[i] = result[i >> 1] + (i & 1);
    }

    // Return the array of answers
    return result;
};