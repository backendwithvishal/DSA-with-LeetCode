// Main function
function searchRange(nums, target) {

    return [findFirst(nums, target), findLast(nums, target)];
}


// Find first occurrence of target
function findFirst(nums, target) {

    let left = 0;
    let right = nums.length - 1;
    let result = -1;

    while (left <= right) {

        let mid = Math.floor((left + right) / 2);

        if (nums[mid] === target) {
            result = mid;     // store answer
            right = mid - 1;  // move left to find earlier index
        }
        else if (nums[mid] < target) {
            left = mid + 1;
        }
        else {
            right = mid - 1;
        }
    }

    return result;
}


// Find last occurrence of target
function findLast(nums, target) {

    let left = 0;
    let right = nums.length - 1;
    let result = -1;

    while (left <= right) {

        let mid = Math.floor((left + right) / 2);

        if (nums[mid] === target) {
            result = mid;     // store answer
            left = mid + 1;   // move right to find later index
        }
        else if (nums[mid] < target) {
            left = mid + 1;
        }
        else {
            right = mid - 1;
        }
    }

    return result;
}

/* 
input :- nums = [1, 2, 2, 2, 3, 4, 5]
target = 2
output :- [1, 3]

Explanation: First occurrence of 2 is at index 1, last is at index 3.

input :- nums = [5, 7, 7, 8, 8, 10]
target = 8
output :- [3, 4]

Explanation: 8 appears at indices 3 and 4.

3. Input:  nums = [5, 7, 7, 8, 8, 10], target = 6

   Output: [-1, -1]

   Explanation: 6 is not in the array — both searches return -1.

❌ Wrong input & output

4. Input:  nums = [2, 2, 2, 2], target = 2

   Wrong output: [0, 0]   // ❌ only found first, missed last
   Correct output: [0, 3]  // ✅ 2 spans the entire array
*/