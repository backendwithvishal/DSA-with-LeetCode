// 371 question on Leetcode 

function getSum(a, b) {

    // Repeat until there is no carry
    while (b !== 0) {

        // Find carry bits
        const carry = a & b;

        // Add without carry
        a = a ^ b;

        // Move carry to the next bit
        b = carry << 1;
    }

    return a;
}