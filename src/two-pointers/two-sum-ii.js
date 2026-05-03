function twoSum(numbers, target) {
    // Initialize two pointers, one at the beginning and one at the end of the array
    let left = 0, right = numbers.length - 1;
    
    // Traverse the array using the two-pointer technique
    while (left < right) {
        // Calculate the current sum of the two elements
        let currentSum = numbers[left] + numbers[right];
        
        // If we find the target sum, return the 1-based indices
        if (currentSum === target) {
            return [left + 1, right + 1];  // 1-based index, so add 1
        }
        
        // If the sum is less than the target, move the left pointer to the right
        else if (currentSum < target) {
            left += 1;
        }
        
        // If the sum is greater than the target, move the right pointer to the left
        else {
            right -= 1;
        }
    }
    
    // Since the problem guarantees exactly one solution, we don't need to handle no solution case.
}

/** 
input:-
let numbers = [2, 7, 11, 15];
let target = 9;
**/