/* 153 question on leecode */
var findMin = function(nums) {

    // Binary search to find minimum in rotated sorted array
    let left = 0;
    let right = nums.length - 1;

    while (left < right) {
        let mid = Math.floor((left + right) / 2);

        if (nums[mid] > nums[right]) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }

    // left points to the minimum element
    return nums[left];
};
/*
1. input :- nums = [3, 4, 5, 1, 2]
   output :- 1
   Explanation :- The array is rotated, and 1 is the smallest element.
   Binary search: mid=5, 5 > nums[right]=2 → go right. Eventually finds 1.
   
2. input :- nums = [4, 5, 6, 7, 0, 1, 2]
   output :- 0
   Explanation :- The array is rotated, and 0 is the smallest element.

3. input :- nums = [11, 13, 15, 17]
   output :- 11
   Explanation :- Array is NOT rotated (already sorted). Minimum is the first element.

❌ Wrong input & output

4. input :- nums = [2, 1]

   Wrong output: 2   // ❌ picked the first element without checking
   Correct output: 1  // ✅ 1 is smaller — binary search correctly finds it
*/