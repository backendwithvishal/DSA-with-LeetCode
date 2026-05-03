// 125 question on leetcode
var isPalindrome = function(s) {

    // Helper: check if character is a letter or digit
    function isAlphanumeric(c) {
        return /[a-z0-9]/.test(c);
    }

    // Convert to lowercase once upfront
    s = s.toLowerCase();

    let left = 0;
    let right = s.length - 1;

    while (left < right) {

        // Skip non-alphanumeric from the left
        while (left < right && !isAlphanumeric(s[left])) left++;

        // Skip non-alphanumeric from the right
        while (left < right && !isAlphanumeric(s[right])) right--;

        // Compare the two valid characters
        if (s[left] !== s[right]) return false;

        // Move both pointers inward
        left++;
        right--;
    }

    // All characters matched → it's a palindrome
    return true;
};
/*
1. Input: "A man, a plan, a canal: Panama"
   Output: true
   Reason: After removing non-alphanumeric and lowering case → "amanaplanacanalpanama"
           (same forwards & backwards)

2. Input: "racecar"
   Output: true
   Reason: After removing non-alphanumeric and lowering case → "racecar"
           (same forwards & backwards)

3. Input: "race a car"
   clean → "raceacar"
   forward:  r a c e a c a r
   backward: r a c a e c a r
                     ↑ mismatch at index 3
   Output: false

   Wrong answer would be: true (Someone forgot to clean or compare correctly)
*/