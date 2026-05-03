function twoSum(numbers, target) {
    let left = 0;  // Start pointer at the beginning
    let right = numbers.length - 1;  // Start pointer at the end
    
    while (left < right) {  // Keep going until the pointers meet
        let sum = numbers[left] + numbers[right];  // Calculate the sum of two numbers
        
        if (sum === target) {
            return [left + 1, right + 1];  // Return 1-based indices
        } else if (sum < target) {
            left++;  // If sum is smaller, move left pointer right to increase sum
        } else {
            right--;  // If sum is larger, move right pointer left to decrease sum
        }
    }
}