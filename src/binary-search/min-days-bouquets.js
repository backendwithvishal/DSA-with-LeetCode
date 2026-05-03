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
               So we just need 3 flowers that have bloomed.

// wrong & second input & output 

input :- bloomDay = [1, 2, 3]
         m = 2
         k = 2
output :- -1
Explanation :- Need 2 bouquets × 2 flowers each = 4 flowers
               But only 3 flowers exist
               So it's impossible, no matter how many days we wait.
*/