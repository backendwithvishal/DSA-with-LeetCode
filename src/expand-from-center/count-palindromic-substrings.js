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

2
leetcode input :- "abc"

output :- 3
*/