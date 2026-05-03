// 189 question on leetcode  

var rotate = function (nums, k) {

    const n = nums.length;

    // Handle k larger than array length (full rotations cancel out)
    k = k % n;

    // Helper: reverse elements from index l to r (in-place)
    function reverse(l, r) {
        while (l < r) {
            [nums[l], nums[r]] = [nums[r], nums[l]]; // swap
            l++;
            r--;
        }
    }

    // Step 1: Reverse the entire array
    reverse(0, n - 1);

    // Step 2: Reverse first k elements (they're in wrong order)
    reverse(0, k - 1);

    // Step 3: Reverse the remaining elements (they're in wrong order)
    reverse(k, n - 1);
};

/*
1. Input:
nums = [1, 2, 3, 4, 5, 6, 7]
k = 3

Output:
[5, 6, 7, 1, 2, 3, 4]

Explanation: 
Step-by-step explanation
n = 7
k = 3 % 7 = 3

Step 1: Reverse entire array
[7, 6, 5, 4, 3, 2, 1]

Step 2: Reverse first k elements (0 → 2)
[5, 6, 7, 4, 3, 2, 1]

Step 3: Reverse remaining elements (3 → 6)
[5, 6, 7, 1, 2, 3, 4]


2. Input:
nums = [1, 2, 3, 4]
k = 2

Output:
[3, 4, 1, 2]

Explanation:
Step-by-step explanation
n = 4
k = 2 % 4 = 2

Step 1: Reverse entire array
[4, 3, 2, 1]

Step 2: Reverse first k elements (0 → 1)
[3, 4, 2, 1]

Step 3: Reverse remaining elements (2 → 3)
[3, 4, 1, 2]


❌ wrong input & output 

3. Input:
nums = []
k = 3

Output:
nums = []   // but this is logically incorrect behavior

Explanation:
n = nums.length = 0

Then: k = k % n = 3 % 0 → ❌ invalid operation (NaN in JavaScript)

Now k becomes NaN, so:
reverse(0, k - 1) → reverse(0, NaN)
reverse(k, n - 1) → reverse(NaN, -1)

These loops never run properly because comparisons with NaN are always false.
*/