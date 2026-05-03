// 438 question on leetcode
var findAnagrams = function (s, p) {

    const result = [];

    // Edge case: p can't fit inside s
    if (p.length > s.length) return result;

    // Frequency arrays for all 26 lowercase letters
    // Index 0 = 'a', index 1 = 'b', ..., index 25 = 'z'
    const pCount = new Array(26).fill(0);
    const sCount = new Array(26).fill(0);

    const a = 'a'.charCodeAt(0); // base char code = 97

    // Count frequency of each char in p
    // and also the first window of s (size = p.length)
    for (let i = 0; i < p.length; i++) {
        pCount[p.charCodeAt(i) - a]++;
        sCount[s.charCodeAt(i) - a]++;
    }

    // Count how many of the 26 characters have matching frequencies
    // between sCount and pCount at the start
    let matches = 0;
    for (let i = 0; i < 26; i++) {
        if (pCount[i] === sCount[i]) matches++;
    }

    // If all 26 characters match, first window is an anagram
    if (matches === 26) result.push(0);

    // Slide the window from index 1 to end
    // left = character leaving the window
    // right = character entering the window
    for (let right = p.length; right < s.length; right++) {

        const left = right - p.length; // index of char being removed

        // --- Add new right character into the window ---
        const rightIdx = s.charCodeAt(right) - a;

        // Before updating, check if right char was matched
        // If it was matched and now we're changing its count → lose a match
        if (sCount[rightIdx] === pCount[rightIdx]) matches--;

        sCount[rightIdx]++;  // Add right char to window

        // After updating, check if it's now matched
        if (sCount[rightIdx] === pCount[rightIdx]) matches++;

        // --- Remove old left character from the window ---
        const leftIdx = s.charCodeAt(left) - a;

        // Before updating, check if left char was matched
        if (sCount[leftIdx] === pCount[leftIdx]) matches--;

        sCount[leftIdx]--;   // Remove left char from window

        // After updating, check if it's still matched
        if (sCount[leftIdx] === pCount[leftIdx]) matches++;

        // If all 26 characters have equal frequency → anagram found!
        if (matches === 26) result.push(left + 1);
    }

    return result;
};

/*
1.  input :- s = "cbaebabacd"
             p = "abc"

    output :- [0, 6]

    Explanation :- "cba" (index 0) → anagram of "abc" 
                   "bac" (index 6) → anagram of "abc" 

2.  input :- s = "abab"
             p = "ab"

    output :- [0, 1, 2]

    Explanation :- "ab" → index 0 
                   "ba" → index 1 
                   "ab" → index 2 

3.  input :- s = "aaaa"
             p = "aa"

    output :- [0, 1, 2]

    Expplantion :- Why that expectation is wrong?

                  Because sliding window checks every continuous substring:

                 "aa" → index 0 
                 "aa" → index 1 
                 "aa" → index 2 

*/