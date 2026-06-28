// 128 question on Leetcode

var longestConsecutive = function(nums) {
    // Store all numbers for O(1) lookup
    let set = new Set(nums);

    let longest = 0;

    for (let num of set) {
        // Start only if num is the beginning of a sequence
        if (!set.has(num - 1)) {
            let currentNum = num;
            let length = 1;

            // Count consecutive numbers
            while (set.has(currentNum + 1)) {
                currentNum++;
                length++;
            }

            longest = Math.max(longest, length);
        }
    }

    return longest;
};