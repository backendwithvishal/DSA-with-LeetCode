// 191 Question on Leetcode 

var hammingWeight = function(n) {
    // Count how many 1s are in the binary form of n
    let count = 0;

    // Keep checking bits until n becomes 0
    while (n !== 0) {
        // If the last bit is 1, increase the count
        count += n & 1;

        // Move to the next bit
        n >>>= 1;
    }

    // Return the total number of 1 bits
    return count;
};