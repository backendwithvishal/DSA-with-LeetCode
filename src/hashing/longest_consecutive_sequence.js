// 128 question on Leetcode

var longestConsecutive = function(nums) {
    let set = new Set(nums);
    let longest = 0;

    for (let num of set) {
        // Only start from the beginning of a sequence
        if (!set.has(num - 1)) {
            let length = 1;

            while (set.has(num + length)) {
                length++;
            }

            longest = Math.max(longest, length);
        }
    }

    return longest;
};