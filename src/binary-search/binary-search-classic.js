// 704 question on leetcode
var search = function(nums, target) {

    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {

        // Pick the middle index
        const mid = Math.floor((left + right) / 2);

        if (nums[mid] === target) {
            return mid; // found the target
        }

        if (nums[mid] < target) {
            left = mid + 1;  // target is in the RIGHT half
        } else {
            right = mid - 1; // target is in the LEFT half
        }
    }

    return -1; // target not found
};
/*
1. input : nums = [1, 3, 5, 7, 9]
   target = 5
   output : 2
   Explanation: 
   The array is sorted. The middle element becomes 5, which matches the target, so the function correctly returns index 2.

2. input : nums = [2, 4, 6, 8, 10, 12]
   target = 10
   output : 4
   Explanation:
   Binary search narrows down the range and finds 10 at index 4.

3. input: nums = [10, 5, 2, 8, 3]
   target = 8
   output : -1   // (Incorrect result)
   Explanation:
   Your algorithm assumes the array is sorted in ascending order, but this input array is unsorted.

   Binary search only works correctly on sorted arrays. Since the order is random here, the logic:

   if (nums[mid] < target)

   leads the search in the wrong direction, causing it to miss the target even though 8 exists in the array.
*/