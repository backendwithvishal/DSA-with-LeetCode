// Function to check if string can become palindrome
// after deleting at most one character
function validPalindrome(s) {

    let left = 0;                 // pointer at start
    let right = s.length - 1;     // pointer at end

    // compare characters from both sides
    while (left < right) {

        // if characters are not equal
        if (s[left] !== s[right]) {

            // try skipping left character OR skipping right character
            return checkPalindrome(s, left + 1, right) || 
                   checkPalindrome(s, left, right - 1);
        }

        // move both pointers toward center
        left++;
        right--;
    }

    // if no mismatch found
    return true;
}


// helper function to check if substring is palindrome
function checkPalindrome(s, left, right) {

    while (left < right) {

        // if characters don't match → not palindrome
        if (s[left] !== s[right]) {
            return false;
        }

        left++;
        right--;
    }

    // substring is palindrome
    return true;
}

/* 
Input:  "deeee"
Output: true

Explanation: Remove 'd' → "eeee" is a palindrome. ✅

2. Input:  "abca"

   Output: true

   Explanation: Remove 'c' → "aba" is a palindrome. Or remove 'b' → "aca" is a palindrome.

3. Input:  "abc"

   Output: false

   Explanation: No single deletion makes it a palindrome.
   Remove 'a' → "bc" ❌, remove 'b' → "ac" ❌, remove 'c' → "ab" ❌

❌ Wrong input & output

4. Input:  "raceacar"

   Wrong output: true    // ❌ removing one char still doesn't make it a palindrome
   Correct output: false  // ✅ "raceacar" needs more than one deletion
*/