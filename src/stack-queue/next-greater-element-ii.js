// Function to find next greater elements in circular array
function nextGreaterElements(nums) {

    let n = nums.length;
    let result = new Array(n).fill(-1);  // default = -1
    let stack = [];  // store indices

    // traverse array twice for circular effect
    for (let i = 0; i < 2 * n; i++) {

        let index = i % n;  // handle circular index

        // while current number is greater than stack top
        while (stack.length > 0 && nums[index] > nums[stack[stack.length - 1]]) {

            let prevIndex = stack.pop();
            result[prevIndex] = nums[index];
        }

        // only push indices in first pass
        if (i < n) {
            stack.push(index);
        }
    }

    return result;
}

/* 
input :-  [1, 2, 1]
output : - [2, -1, 2]

Explanation: 
  1 → next greater in circular array is 2 ✅
  2 → no element greater than 2 in the array → -1
  1 → wraps around, finds 2 ✅

2. Input:  [5, 4, 3, 2, 1]

   Output: [-1, 5, 5, 5, 5]

   Explanation: 5 has no greater element (it's the max) → -1.
   All others wrap around and find 5.

3. Input:  [1, 3, 2]

   Output: [3, -1, 3]

   Explanation: 1 → 3, 3 → no greater → -1, 2 → wraps → finds 3.

❌ Wrong input & output

4. Input:  [2, 1, 2, 4, 3]

   Wrong output: [4, 2, 4, -1, 4]   // ✅ actually correct
   Wrong output: [4, 2, 4, -1, -1]  // ❌ 3 wraps around and finds 4, not -1
*/