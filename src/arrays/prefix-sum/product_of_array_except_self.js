var productExceptSelf = function(nums) {
    // Get the size of the array
    const n = nums.length;

    // Create a result array and fill it with 1s
    const answer = new Array(n).fill(1);

    // Store the product of all numbers on the left side
    let leftProduct = 1;
    for (let i = 0; i < n; i++) {
        answer[i] = leftProduct; // Save left-side product
        leftProduct *= nums[i];  // Update left-side product
    }

    // Store the product of all numbers on the right side
    let rightProduct = 1;
    for (let i = n - 1; i >= 0; i--) {
        answer[i] *= rightProduct; // Multiply by right-side product
        rightProduct *= nums[i];   // Update right-side product
    }

    // Return the final result
    return answer;
};