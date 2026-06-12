// 190 question on Leetcode

var reverseBits = function(n) {
    // Store the reversed number
    let result = 0;

    // Process all 32 bits
    for (let i = 0; i < 32; i++) {
        // Make space for the next bit
        result <<= 1;

        // Add the last bit of n to result
        result |= (n & 1);

        // Move n to the next bit
        n >>>= 1;
    }

    // Return the reversed bits as an unsigned integer
    return result >>> 0;
};