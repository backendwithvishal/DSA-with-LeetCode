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

output:- [1, 2]

Explanation: numbers[0] + numbers[1] = 2 + 7 = 9. Return 1-based indices [1, 2].

2. Input:  numbers = [2, 3, 4], target = 6

   Output: [1, 3]

   Explanation: numbers[0] + numbers[2] = 2 + 4 = 6 → [1, 3].

3. Input:  numbers = [-3, -1, 0, 2, 4, 5], target = 1

   Output: [2, 4]

   Explanation: numbers[1] + numbers[3] = -1 + 2 = 1 → [2, 4].

❌ Wrong input & output

4. Input:  numbers = [2, 7, 11, 15], target = 18

   Wrong output: [1, 3]   // ❌ 2 + 11 = 13, not 18
   Correct output: [2, 3]  // ✅ 7 + 11 = 18 → [2, 3]
**/