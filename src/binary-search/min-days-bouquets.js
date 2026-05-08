// 1482 question on leetcode 
var minDays = function (bloomDay, m, k) {

    const n = bloomDay.length;

    // Edge case: Even with all flowers, we can't make m bouquets
    if (m * k > n) return -1;

    // Helper: Can we make m bouquets if we wait until `day`?
    function canMakeBouquets(day) {
        let bouquets = 0;   // total bouquets formed so far
        let consecutive = 0; // adjacent bloomed flowers count

        for (let i = 0; i < n; i++) {
            if (bloomDay[i] <= day) {
                // This flower has bloomed → add to streak
                consecutive++;

                // If we collected k adjacent flowers → 1 bouquet done!
                if (consecutive === k) {
                    bouquets++;
                    consecutive = 0; // reset for next bouquet
                }
            } else {
                // Flower hasn't bloomed → streak broken
                consecutive = 0;
            }
        }

        // Can we make at least m bouquets?
        return bouquets >= m;
    }

    // Binary search on the answer (day range)
    let left = 1;
    let right = Math.max(...bloomDay);
    let answer = right; // start with worst case

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (canMakeBouquets(mid)) {
            answer = mid;       // mid works! try smaller
            right = mid - 1;
        } else {
            left = mid + 1;     // mid doesn't work, try bigger
        }
    }

    return answer;
};
/*
first input & output
input :- bloomDay = [1, 10, 3, 10, 2]
         m = 3
         k = 1
output :- 3
Explanation :- We need 3 bouquets, each with 1 flower.
               On day 3: flowers at indices 0 (day 1), 2 (day 3), 4 (day 2) have bloomed.
               That's 3 flowers → 3 bouquets of 1 each. ✅

2. Input:  bloomDay = [1, 2, 4, 9, 3, 4, 1], m = 2, k = 2

   Output: 4

   Explanation: Need 2 bouquets × 2 adjacent flowers = 4 adjacent bloomed flowers.
   On day 4: bloomed = [1,2,4,_,3,4,1] → positions 0,1,2 bloomed (3 adjacent) → 1 bouquet
             positions 4,5,6 bloomed → 2 bouquets ✅

// wrong & second input & output 

input :- bloomDay = [1, 2, 3]
         m = 2
         k = 2
output :- -1
Explanation :- Need 2 bouquets × 2 flowers each = 4 flowers
               But only 3 flowers exist
               So it's impossible, no matter how many days we wait.

❌ Wrong input & output

3. Input:  bloomDay = [7, 7, 7, 7, 12, 7, 7], m = 2, k = 3

   Wrong output: 7    // ❌ on day 7, only 6 flowers bloom (not 7 adjacent in groups of 3)
   Correct output: 12  // ✅ need 2 groups of 3 adjacent → positions 0-2 and 3-5 or 4-6
                       // position 4 blooms on day 12, so day 12 is needed
*/