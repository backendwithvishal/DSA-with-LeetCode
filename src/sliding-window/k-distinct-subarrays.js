// Function to count subarrays with exactly K distinct integers
function subarraysWithKDistinct(nums, k) {

    // exactly(k) = atMost(k) - atMost(k-1)
    return atMost(nums, k) - atMost(nums, k - 1);
}


// Helper function to count subarrays with at most K distinct numbers
function atMost(nums, k) {

    let left = 0;           // left pointer of window
    let count = 0;          // total valid subarrays
    let map = new Map();    // store frequency of numbers

    for (let right = 0; right < nums.length; right++) {

        // add current number to map
        map.set(nums[right], (map.get(nums[right]) || 0) + 1);

        // if distinct numbers exceed k, shrink window
        while (map.size > k) {

            map.set(nums[left], map.get(nums[left]) - 1);

            if (map.get(nums[left]) === 0) {
                map.delete(nums[left]);
            }

            left++;
        }

        // add number of valid subarrays ending at right
        count += right - left + 1;
    }

    return count;
}

/* 
input :-
nums = [1,2,1,2,3]
k = 2 

[1,2]
[2,1]
[1,2]
[2,3]
[1,2,1]
[2,1,2]
[1,2,1,2]

output :- 7

2. Input:  nums = [1, 2, 1, 3, 4], k = 3

   Output: 3

   Explanation: Subarrays with exactly 3 distinct: [1,2,1,3], [2,1,3], [1,3,4]

3. Input:  nums = [1, 1, 1, 1], k = 1

   Output: 10

   Explanation: Every subarray has exactly 1 distinct number.
   Subarrays of length 1: 4, length 2: 3, length 3: 2, length 4: 1 → total = 10

❌ Wrong input & output

4. Input:  nums = [1, 2, 3], k = 4

   Wrong output: 1   // ❌ no subarray has 4 distinct values in a 3-element array
   Correct output: 0  // ✅ k > array length → impossible
*/