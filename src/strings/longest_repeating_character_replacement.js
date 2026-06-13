// 424 question on Leetcode

var characterReplacement = function(s, k) {
    // Count how many times each character appears in the window
    const count = {};

    let left = 0;
    let maxFreq = 0; // Highest frequency of a single character
    let maxLength = 0;

    // Expand the window with right pointer
    for (let right = 0; right < s.length; right++) {
        count[s[right]] = (count[s[right]] || 0) + 1;

        // Update the highest character frequency in the window
        maxFreq = Math.max(maxFreq, count[s[right]]);

        // If more than k replacements are needed, shrink the window
        while ((right - left + 1) - maxFreq > k) {
            count[s[left]]--;
            left++;
        }

        // Save the largest valid window size
        maxLength = Math.max(maxLength, right - left + 1);
    }

    // Return the answer
    return maxLength;
};