// Function to count subarrays with sum = k
function subarraySum(nums, k) {

    let count = 0;           // total subarrays
    let sum = 0;             // current prefix sum
    let map = new Map();

    // base case: sum 0 occurs once
    map.set(0, 1);

    for (let i = 0; i < nums.length; i++) {

        sum += nums[i];   // add current number

        // check if (sum - k) exists
        if (map.has(sum - k)) {
            count += map.get(sum - k);
        }

        // store current sum in map
        map.set(sum, (map.get(sum) || 0) + 1);
    }

    return count;
}

/*
input :- nums = [1,1,1]
    k = 2
output :- 2
*/