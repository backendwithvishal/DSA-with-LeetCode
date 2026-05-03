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

input :- nums = [5, 7, 7, 8, 8, 10]
target = 8
output :- [3, 4]
*/