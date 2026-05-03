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
*/