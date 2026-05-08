function searchRange(nums, target) {
    // Call binary search twice:
    // 1. To find first occurrence
    // 2. To find last occurrence
    return [
        binarySearch(nums, target, true),   // find first index
        binarySearch(nums, target, false)   // find last index
    ];
}

function binarySearch(nums, target, findFirst) {
    let left = 0;                    // start of array
    let right = nums.length - 1;     // end of array
    let result = -1;                 // default if target not found

    while (left <= right) {
        // Find middle index
        let mid = Math.floor((left + right) / 2);

        if (nums[mid] === target) {
            // Target found → store index
            result = mid;

            if (findFirst) {
                // Move LEFT to find earlier occurrence
                right = mid - 1;
            } else {
                // Move RIGHT to find later occurrence
                left = mid + 1;
            }
        }
        else if (nums[mid] < target) {
            // Target is on right side
            left = mid + 1;
        }
        else {
            // Target is on left side
            right = mid - 1;
        }
    }

    return result; // return first or last index
}

/* 
input :- nums = [1, 2, 2, 2, 3, 4, 5]
        target = 2
output :- [1, 3]

Explanation: First occurrence of 2 is at index 1, last is at index 3.

2. Input:  nums = [5, 7, 7, 8, 8, 10], target = 8

   Output: [3, 4]

   Explanation: 8 appears at indices 3 and 4.

3. Input:  nums = [5, 7, 7, 8, 8, 10], target = 6

   Output: [-1, -1]

   Explanation: 6 does not exist in the array.

❌ Wrong input & output

4. Input:  nums = [1, 1, 1, 1], target = 1

   Wrong output: [0, 0]   // ❌ only found first occurrence, missed last
   Correct output: [0, 3]  // ✅ 1 appears from index 0 to 3
*/