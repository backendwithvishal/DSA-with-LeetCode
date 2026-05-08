// Function to search target in rotated sorted array
function search(nums, target) {

    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {

        let mid = Math.floor((left + right) / 2);

        // if target found
        if (nums[mid] === target) {
            return mid;
        }

        // check if left part is sorted
        if (nums[left] <= nums[mid]) {

            // check if target lies in left sorted part
            if (target >= nums[left] && target < nums[mid]) {
                right = mid - 1;
            } 
            else {
                left = mid + 1;
            }

        } 
        // otherwise right part is sorted
        else {

            // check if target lies in right sorted part
            if (target > nums[mid] && target <= nums[right]) {
                left = mid + 1;
            } 
            else {
                right = mid - 1;
            }
        }
    }

    // target not found
    return -1;
}

/* 
input :- let nums = [4,5,6,7,0,1,2];
         let target = 0;

output :- 4

Explanation: The array was rotated. Left half [4,5,6,7] is sorted.
Target 0 is not in [4,7], so search right half [0,1,2]. Found at index 4.

2. Input:  nums = [4, 5, 6, 7, 0, 1, 2], target = 3

   Output: -1

   Explanation: 3 does not exist in the array.

3. Input:  nums = [1], target = 0

   Output: -1

   Explanation: Single element array, 0 ≠ 1 → not found.

❌ Wrong input & output

4. Input:  nums = [5, 1, 3], target = 3

   Wrong output: -1   // ❌ missed the target
   Correct output: 2   // ✅ right half [1,3] is sorted, 3 is in range → found at index 2
*/