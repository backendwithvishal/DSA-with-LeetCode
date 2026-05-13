// 75 question on leetcode

function sortColors(nums) {
    let low  = 0;               // next slot for 0 (red)
    let mid  = 0;               // current element being examined
    let high = nums.length - 1; // next slot for 2 (blue)

    while (mid <= high) {

        if (nums[mid] === 0) {
            // 0 belongs at the front → swap with low
            [nums[low], nums[mid]] = [nums[mid], nums[low]];
            low++;  // front boundary moves right
            mid++;  // safe to move mid (swapped value is always 1 or already seen 0)

        } else if (nums[mid] === 1) {
            // 1 is already in the correct middle zone → just move on
            mid++;

        } else {
            // 2 belongs at the back → swap with high
            [nums[mid], nums[high]] = [nums[high], nums[mid]];
            high--; // back boundary moves left
            // do NOT move mid — swapped value is unknown, must check it next!
        }
    }
}