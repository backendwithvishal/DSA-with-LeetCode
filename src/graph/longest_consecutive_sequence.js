// 128 question on Leetcode

var longestConsecutive = function(nums) {
    // Store all number for 0(1) lookup
    let set = new Set(nums);
    let longest = 0;

    for (let num of set) {
        // Start only if num is the beginning of a sequence
        if (!set.has(num - 1)) {
            let length = 1;

            // Count consecutive numbers
            while (set.has(num + length)) {
                length++;
            }

            longest = Math.max(longest, length);
        }
    }

    return longest;    
};