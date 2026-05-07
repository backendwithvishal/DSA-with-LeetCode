// Function to count subarrays with sum = k
function subarraySum(nums, k) {

    let count = 0;           // total subarrays
    let sum = 0;             // current prefix sum
    let map = new Map();

    // base case: sum 0 occurs once
    map.set(0, 1);

    for (let i = 0; i < nums.length; i++) {

        sum += nums[i];   // add current number

        // check if (sum - k) exists
        if (map.has(sum - k)) {
            count += map.get(sum - k);
        }

        // store current sum in map
        map.set(sum, (map.get(sum) || 0) + 1);
    }

    return count;
}

/*
input :- nums = [1,1,1]
    k = 2
output :- 2

Explanation: The two subarrays [1,1] (indices 0–1) and [1,1] (indices 1–2) both sum to 2.

2. Input:  nums = [1, 2, 3], k = 3

   Output: 2

   Explanation: Subarrays that sum to 3: [3] and [1,2].

3. Input:  nums = [1, -1, 1], k = 1

   Output: 3

   Explanation: [1] at index 0, [1,-1,1] full array, [1] at index 2 — all sum to 1.

❌ Wrong input & output

4. Input:  nums = [1, 2, 3], k = 7

   Wrong output: 1   // ❌ no subarray sums to 7
   Correct output: 0  // ✅ no valid subarray exists
*/