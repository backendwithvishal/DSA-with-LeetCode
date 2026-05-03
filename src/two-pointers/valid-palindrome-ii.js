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
Removed: d 
*/