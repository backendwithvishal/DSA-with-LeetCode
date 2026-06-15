// 770 question on leetcode

var climbStairs = function(n) {
    // If there is only 1 step, there is 1 way
    if (n <= 2) {
        return n;
    }

    // Ways to reach step 1 and step 2
    let first = 1;
    let second = 2;

    // Calculate ways for steps 3 to n
    for (let i = 3; i <= n; i++) {
        const current = first + second;

        // Move the values forward
        first = second;
        second = current;
    }

    // Return ways to reach the nth step
    return second;
};