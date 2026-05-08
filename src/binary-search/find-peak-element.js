// 162 question on leetcode 
var findPeakElement = function(nums) {
    let left = 0;
    let right = nums.length - 1;

    while (left < right) {
        let mid = Math.floor((left + right) / 2);

        // Compare mid with next element
        if (nums[mid] < nums[mid + 1]) {
            // Peak is on the right
            left = mid + 1;
        } else {
            // Peak is on the left (including mid)
            right = mid;
        }
    }

    // left === right → peak index
    return left;
};

/*
1. input :- nums = [1, 2, 3, 1]
   output :- 2
   Explanation: nums[2] = 3 is greater than its neighbors (2 and 1) → peak at index 2.

2. input :- nums = [1, 2, 1, 3, 5, 6, 4]
   output :- 5
   Explanation: nums[5] = 6 is greater than nums[4]=5 and nums[6]=4 → peak at index 5.
   (index 1 is also a local peak, but binary search finds index 5 first)

3. input :- nums = [1]
   output :- 0
   Explanation: Single element — it's trivially a peak (no neighbors).

❌ Wrong input & output

4. input :- nums = [3, 2, 1]

   Wrong output: 1   // ❌ index 1 has value 2, which is NOT greater than index 0 (value 3)
   Correct output: 0  // ✅ nums[0] = 3 is the peak (greater than its only neighbor 2)
*/