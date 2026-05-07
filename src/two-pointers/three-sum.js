function threeSum(nums) {

    const result = [];

    // Step 1: Sort array
    nums.sort((a, b) => a - b);

    for (let i = 0; i < nums.length - 2; i++) {

        // Skip duplicate numbers
        if (i > 0 && nums[i] === nums[i - 1]) continue;

        let left = i + 1;
        let right = nums.length - 1;

        while (left < right) {

            const sum = nums[i] + nums[left] + nums[right];

            if (sum === 0) {

                // Found valid triplet
                result.push([nums[i], nums[left], nums[right]]);

                left++;
                right--;

                // Skip duplicates
                while (left < right && nums[left] === nums[left - 1]) left++;
                while (left < right && nums[right] === nums[right + 1]) right--;

            }
            else if (sum < 0) {
                left++;
            }
            else {
                right--;
            }
        }
    }

    return result;
}

/*
input:- nums = [-1, 0, 1, 2, -1, -4]

output :- [
  [-1, -1, 2],
  [-1, 0, 1]
]

Explanation: Two unique triplets sum to zero.

2. Input:  nums = [0, 0, 0]

   Output: [[0, 0, 0]]

   Explanation: Only one triplet — all zeros.

3. Input:  nums = [1, 2, 3]

   Output: []

   Explanation: No three numbers sum to zero.

❌ Wrong input & output

4. Input:  nums = [-2, 0, 0, 2, 2]

   Wrong output: [[-2,0,2],[-2,0,2]]   // ❌ duplicate triplets included
   Correct output: [[-2,0,2]]           // ✅ duplicates skipped
*/