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

/*
1. Input:  numbers = [2, 7, 11, 15], target = 9

   Output: [1, 2]

   Explanation: numbers[0] + numbers[1] = 2 + 7 = 9. Return 1-based indices [1, 2].

2. Input:  numbers = [2, 3, 4], target = 6

   Output: [1, 3]

   Explanation: 2 + 4 = 6 → indices [1, 3].

3. Input:  numbers = [-1, 0], target = -1

   Output: [1, 2]

   Explanation: -1 + 0 = -1 → indices [1, 2].

❌ Wrong input & output

4. Input:  numbers = [1, 2, 3, 4], target = 5

   Wrong output: [1, 4]   // ❌ 1 + 4 = 5 but [2,3] also works — however only one solution exists
   Correct output: [1, 4]  // ✅ actually correct — but wrong if you returned [2, 3] (2+3=5 also valid)
   Note: The problem guarantees exactly one solution, so either pair is acceptable.
*/