// 242 question on LeetCode

var isAnagram = function(s, t) {
    // If lengths are different, they cannot be anagrams
    if (s.length !== t.length) {
        return false;
    }

    // Store the count of each character
    const count = {};

    // Count characters in s
    for (let char of s) {
        count[char] = (count[char] || 0) + 1;
    }

    // Remove counts using characters from t
    for (let char of t) {
        if (!count[char]) {
            return false; // Character missing or used too many times
        }

        count[char]--;
    }

    // All character counts matched
    return true;
};