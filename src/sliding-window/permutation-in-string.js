function checkInclusion(s1, s2) {

    if (s1.length > s2.length) return false;

    // Count letters in s1 and first window of s2
    let count1 = new Array(26).fill(0);
    let count2 = new Array(26).fill(0);

    for (let i = 0; i < s1.length; i++) {
        count1[s1.charCodeAt(i) - 97]++;
        count2[s2.charCodeAt(i) - 97]++;
    }

    // Track how many positions match between count1 and count2
    let matches = 0;
    for (let i = 0; i < 26; i++) {
        if (count1[i] === count2[i]) matches++;
    }

    // Slide window — add right char, remove left char
    for (let i = s1.length; i < s2.length; i++) {

        // All 26 positions match = permutation found
        if (matches === 26) return true;

        // Add new right character
        let right = s2.charCodeAt(i) - 97;
        count2[right]++;
        if (count2[right] === count1[right]) matches++;
        else if (count2[right] === count1[right] + 1) matches--;

        // Remove old left character
        let left = s2.charCodeAt(i - s1.length) - 97;
        count2[left]--;
        if (count2[left] === count1[left]) matches++;
        else if (count2[left] === count1[left] - 1) matches--;
    }

    // Check last window
    return matches === 26;
}

/*
 1. input :- s1 = "ab";
             s2 = "eidbaooo"
    output :- true

 2. input :- s1 = "adc";
             s2 = "dcda"
    output :- true
*/