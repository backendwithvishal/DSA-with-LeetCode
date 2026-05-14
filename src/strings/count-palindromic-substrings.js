// Function to count palindromic substrings
function countSubstrings(s) {

    let count = 0;

    // check palindrome by expanding from center
    function expand(left, right) {

        while (left >= 0 && right < s.length && s[left] === s[right]) {
            count++;      // found a palindrome
            left--;       // expand left
            right++;      // expand right
        }
    }

    // check every index as center
    for (let i = 0; i < s.length; i++) {

        expand(i, i);       // odd length palindrome
        expand(i, i + 1);   // even length palindrome
    }

    return count;
}

/*
1 
input :- let s = "aaa";

output :- 6 

Explanation: All substrings: "a"(×3), "aa"(×2), "aaa"(×1) = 6 palindromes total.

2
leetcode input :- "abc"

output :- 3

Explanation: Each single character is its own palindrome: "a", "b", "c" = 3.

3. Input:  "abba"

   Output: 6

   Explanation: "a"(×2), "b"(×2), "bb", "abba" = 6 palindromes.

❌ Wrong input & output

4. Input:  "abc"

   Wrong output: 6   // ❌ counts non-palindromes like "ab", "bc", "abc"
   Correct output: 3  // ✅ only "a", "b", "c" are palindromes
*/
