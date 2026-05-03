// 3 question on leetcode
var lengthOfLongestSubstring = function(s) {
    let set = new Set();
    let left = 0;
    let maxLength = 0;

    for (let right = 0; right < s.length; right++) {
        // If duplicate found, shrink window
        while (set.has(s[right])) {
            set.delete(s[left]);
            left++;
        }

        // Add current character
        set.add(s[right]);

        // Update max length
        maxLength = Math.max(maxLength, right - left + 1);
    }

    return maxLength;
};
/*
1. input :- s = "abcabcbb"
   output :- 3
   Explanation :-The longest substring without repeating characters is "abc" → length = 3

2. input :- s = "bbbbb"
   output :- 1
   Explanation :- All characters are the same → longest substring is "b" → length = 1
*/