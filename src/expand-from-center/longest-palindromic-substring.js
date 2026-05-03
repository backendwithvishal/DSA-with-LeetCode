// 5 question on leetcode

var longestPalindrome = function(s) {

    let start = 0;  // start index of longest palindrome
    let maxLen = 1; // length of longest palindrome

    // Helper: expand from center and update longest if found
    function expand(left, right) {

        // Keep expanding while characters match and within bounds
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            left--;
            right++;
        }

        // When loop ends, left & right are one step OUT of the palindrome
        // So actual length = right - left - 1
        const len = right - left - 1;

        // Update our best answer if this palindrome is longer
        if (len > maxLen) {
            maxLen = len;
            start = left + 1; // left overshot by 1, so +1
        }
    }

    for (let i = 0; i < s.length; i++) {
        expand(i, i);     // odd length  → single center
        expand(i, i + 1); // even length → double center
    }

    // Return the longest palindromic substring
    return s.slice(start, start + maxLen);
};

/*
1. Input: "babad"
   Output: "bab"

   Explanation: Your function checks every index as a center and expands outward.
   String: b a b a d

   At index 1 (a):
   Expand (1,1) → "a"
   Expand further → "bab"  (matches on both sides)
   At index 2 (b):
   Expand → "aba" (also valid)

   Now you have two palindromes: "bab" and "aba" (both length 3).
   Your code keeps the first longest one it finds, so it returns "bab".

2. Input: "cbbd"
   Output: "bb"

   Explanation: Check center between index 1 and 2 → "bb" found No longer palindrome exists.
   String: c b b d
   
   At index 1:
   Expand (1,1) → "b"
   Expand (1,2) → "bb" (even-length palindrome)
   Try expanding more → fails
   
   No longer palindrome exists, so "bb" is the answer.
   
   Wrong input & output
   3. Input: "racecar"
   Wrong Output: "race"
   Explanation: Start from middle → expand outward → full string matches.

   Why this is wrong:
   String: r a c e c a r

   Start at middle index 3 (e)
   Expand outward:
   "e" → "cec" → "aceca" → "racecar" 

   So the entire string is a palindrome.

   Correct output should be: "racecar"
   "race" is wrong because:

   It is not a palindrome
   It is not the longest

*/