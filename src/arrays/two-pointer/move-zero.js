// 283 question on leetcode 

function moveZeroes(nums) {
    let slow = 0; //  next position to place a non-zero element

    // fast pointer scans every element in the array
    for (let fast = 0; fast < nums.length; fast++) {

        // only act when fast finds a non-zero element
        if (nums[fast] !== 0) {

            // swap: non-zero goes to slow is position
            //       zero at slow goes to fast's position
            [nums[slow], nums[fast]] = [nums[fast], nums[slow]];

            slow++; // slow moves forward  next slot is ready
        }
        // if nums[fast] is 0 → do nothing, just let fast keep scanning
    }
}