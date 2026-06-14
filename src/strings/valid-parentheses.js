// 20 question on Leetcode

var isValid = function(s) {
    // Stack to keep track of opening brackets
    const stack = [];

    // Match each closing bracket with its opening bracket
    const pairs = {
        ')': '(',
        '}': '{',
        ']': '['
    };

    for (let char of s) {
        // If it's an opening bracket, add it to the stack
        if (char === '(' || char === '{' || char === '[') {
            stack.push(char);
        } else {
            // Get the last opening bracket
            const top = stack.pop();

            // Check if brackets match
            if (top !== pairs[char]) {
                return false;
            }
        }
    }

    // Stack should be empty if all brackets matched
    return stack.length === 0;
};