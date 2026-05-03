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
*/