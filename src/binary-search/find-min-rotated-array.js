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
   Explanation :- The array is rotated, and 1 is the smallest element
   
   2. input :- nums = [4, 5, 6, 7, 0, 1, 2]
   output :- 0
   Explanation :- The array is rotated, and 0 is the smallest element

*/