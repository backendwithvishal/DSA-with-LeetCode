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
*/