// 410 question on leetcode
var splitArray = function (nums, k) {

    // Check: can we split nums into <= k subarrays
    // where each subarray sum <= limit?
    function canSplit(limit) {
        let subarrays = 1;  // We always need at least 1 subarray
        let currentSum = 0;

        for (let num of nums) {
            // If adding this number exceeds the limit,
            // start a new subarray
            if (currentSum + num > limit) {
                subarrays++;
                currentSum = num; // New subarray starts with this num
            } else {
                currentSum += num;
            }
        }

        return subarrays <= k;
    }

    // Binary search range:
    // left  = max element (minimum possible largest sum)
    // right = total sum   (maximum possible largest sum)
    let left = Math.max(...nums);
    let right = nums.reduce((a, b) => a + b, 0);
    let result = right;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (canSplit(mid)) {
            result = mid;       // mid works! Try smaller
            right = mid - 1;
        } else {
            left = mid + 1;     // mid too small, try larger
        }
    }

    return result;
};

/*
input:- nums = [7, 2, 5, 10, 8]
        k = 2
output:- 18
Explanation:- 
Split into: [7, 2, 5] → sum = 14 
            [10, 8] → sum = 18
         Largest sum = 18 (minimum possible)

// ❌ incorrect input and output
// input:- nums = [1, -2, 3, 4]
//         k = 2
// output:- 3   (negative numbers are invalid for this problem)
*/