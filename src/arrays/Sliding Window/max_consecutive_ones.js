// 485 question on leetcode 

function findMaxConsecutiveOnes(nums) {
    let current = 0; // current streak of consecutive 1s
    let best    = 0; // longest streak seen so far

    for (let i = 0; i < nums.length; i++) {

        if (nums[i] === 1) {
            current++; // extend the current streak
        } else {
            current = 0; // 0 breaks the streak → reset
        }

        // update best after every element — never miss the final streak
        best = Math.max(best, current);
    }

    return best;
}