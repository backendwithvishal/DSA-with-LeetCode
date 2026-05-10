// 1552 question on leetcode 

var maxDistance = function(position, m) {

    // Sort positions so we can greedily place balls left to right
    position.sort((a, b) => a - b);

    const n = position.length;

    // Helper: can we place m balls with at least `gap` distance between each?
    function canPlace(gap) {
        let count = 1;                    // place first ball at leftmost position
        let lastPlaced = position[0];     // track where last ball was placed

        for (let i = 1; i < n; i++) {
            // If this basket is far enough from last placed ball
            if (position[i] - lastPlaced >= gap) {
                count++;                  // place a ball here
                lastPlaced = position[i]; // update last placed position
            }

            // Early exit: already placed all m balls 
            if (count === m) return true;
        }

        return false; // couldn't place all m balls
    }

    // Binary search on the answer (minimum distance between balls)
    let left = 1;
    let right = position[n - 1] - position[0]; // max possible distance
    let answer = 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (canPlace(mid)) {
            answer = mid;       // mid works! try larger distance
            left = mid + 1;
        } else {
            right = mid - 1;    // mid doesn't work, try smaller
        }
    }

    return answer;
};
/*
1. input: position = [1, 2, 3, 4, 7], m = 3
   After sorting: [1, 2, 3, 4, 7]
   output: 3
   Explanation:
   We have 5 baskets at positions 1, 2, 3, 4, 7 and we need to place 3 balls.
   We want the minimum gap between any two balls to be as large as possible.
   Best placement → balls at positions 1, 4, 7
     gap between 1 and 4 = 3
     gap between 4 and 7 = 3
   The minimum gap is 3, which is the best we can achieve.

2. input: position = [5, 4, 3, 2, 1, 1000000000], m = 2
   After sorting: [1, 2, 3, 4, 5, 1000000000]
   output: 999999999
   Explanation:
   We only need to place 2 balls, so just put one at each end.
   Ball 1 → position 1 (leftmost)
   Ball 2 → position 1,000,000,000 (rightmost)
   Gap = 1,000,000,000 - 1 = 999,999,999
   No other placement gives a bigger gap, so the answer is 999,999,999.

❌ Wrong input and output 

3. input: position = [1, 2, 8, 12, 17], m = 3
   After sorting: [1, 2, 8, 12, 17]
   output: 6
   Explanation:
   Place 3 balls to maximize the minimum gap.
   Best placement → balls at positions 1, 8, 17
     gap between 1 and 8 = 7
     gap between 8 and 17 = 9
   Minimum gap = 7... but can we do better?
   Try 1, 8, 12 → gaps 7 and 4 → min = 4 (worse)
   Try 1, 2, 17 → gaps 1 and 15 → min = 1 (worse)
   Best is 1, 8, 17 → min gap = 7

   Wrong output: 16   // ❌ that would be placing only 2 balls (1 and 17), but m = 3
   Correct output: 7   // ✅ with 3 balls, best minimum gap is 7
*/