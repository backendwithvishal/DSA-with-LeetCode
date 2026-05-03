// Function to count subarrays with exactly K distinct integers
function subarraysWithKDistinct(nums, k) {

    // exactly(k) = atMost(k) - atMost(k-1)
    return atMost(nums, k) - atMost(nums, k - 1);
}


// Helper function to count subarrays with at most K distinct numbers
function atMost(nums, k) {

    let left = 0;           // left pointer of window
    let count = 0;          // total valid subarrays
    let map = new Map();    // store frequency of numbers

    for (let right = 0; right < nums.length; right++) {

        // add current number to map
        map.set(nums[right], (map.get(nums[right]) || 0) + 1);

        // if distinct numbers exceed k, shrink window
        while (map.size > k) {

            map.set(nums[left], map.get(nums[left]) - 1);

            if (map.get(nums[left]) === 0) {
                map.delete(nums[left]);
            }

            left++;
        }

        // add number of valid subarrays ending at right
        count += right - left + 1;
    }

    return count;
}

/* 
input :-
nums = [1,2,1,2,3]
k = 2 

[1,2]
[2,1]
[1,2]
[2,3]
[1,2,1]
[2,1,2]
[1,2,1,2]

output :- 7
*/