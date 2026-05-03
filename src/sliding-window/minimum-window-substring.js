function minWindow(s, t) {
    let map = new Map();

    // Step 1: store frequency of characters in t
    for (let ch of t) {
        map.set(ch, (map.get(ch) || 0) + 1);
    }

    let left = 0;                 // left pointer of window
    let count = t.length;         // number of characters we still need
    let minLen = Infinity;        // length of smallest valid window
    let start = 0;                // starting index of smallest window

    // Step 2: expand window using right pointer
    for (let right = 0; right < s.length; right++) {

        let char = s[right];      // current character at right pointer

        // if this character is in t
        if (map.has(char)) {

            // if this character is still needed
            if (map.get(char) > 0) {
                count--;          // we matched one required character
            }

            // decrease frequency (even if extra, goes negative)
            map.set(char, map.get(char) - 1);
        }

        // Step 3: when all characters are matched
        while (count === 0) {

            // update minimum window if current one is smaller
            if (right - left + 1 < minLen) {
                minLen = right - left + 1;
                start = left;
            }

            let leftChar = s[left];   // character at left pointer

            // if leftChar is part of t
            if (map.has(leftChar)) {

                // increase frequency because we are removing it
                map.set(leftChar, map.get(leftChar) + 1);

                // if it becomes > 0, we are missing this char again
                if (map.get(leftChar) > 0) {
                    count++;
                }
            }
            left++;  // shrink window from the left
        }
    }

    // if no valid window found, return empty string
    return minLen === Infinity ? "" : s.substring(start, start + minLen);
}
/*
1.  Input:
        s = "ADOBECODEBANC"
        t = "ABC"

    Output:
       "BANC"

    Explanation:
     "BANC" is the smallest substring of s that contains A, B, and C

2.  Input: 
        s = "a"
        t = "aa"

    output: 
        " "
    Explanation:
     t needs 2 'a', but s has only 1
*/