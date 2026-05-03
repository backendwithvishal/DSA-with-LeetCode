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

3. input: position = [1, 2, 8, 12, 17], m = 2
   After sorting: [1, 2, 8, 12, 17]
   output: 16
   Explanation:
   Again only 2 balls, so put one at each end.
   Ball 1 → position 1 (leftmost)
   Ball 2 → position 17 (rightmost)
   Gap = 17 - 1 = 16
   This is the maximum possible gap, so the answer is 16.
   (Note: 1,000,000,000 - 1 from the previous example was a separate input,
    not part of this one.)
*/