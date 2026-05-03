// 150 question on leetcode 

var evalRPN = function (tokens) {

    const stack = [];

    for (const token of tokens) {

        // If token is an operator → pop two numbers and calculate
        if (token === '+' || token === '-' || token === '*' || token === '/') {

            const right = stack.pop(); // second operand (popped first)
            const left = stack.pop();  // first operand (popped second)

            let result;

            if (token === '+') result = left + right;
            if (token === '-') result = left - right;
            if (token === '*') result = left * right;

            // Division truncates toward zero (not Math.floor!)
            if (token === '/') result = Math.trunc(left / right);

            stack.push(result); // push result back for future operations

        } else {
            // Token is a number → convert to integer and push
            stack.push(parseInt(token));
        }
    }

    // Last remaining value in stack is the answer
    return stack[0];
};
/*
1. Input:
tokens = ["2", "1", "+", "3", "*"]

Output:
9

Explanation:
Step-by-step explanation

Stack = []

Push 2 → [2]  
Push 1 → [2, 1]  

Operator '+' → pop 1 and 2 → 2 + 1 = 3 → push → [3]  

Push 3 → [3, 3]  

Operator '*' → pop 3 and 3 → 3 * 3 = 9 → push → [9]  

Final answer = 9

2. Input:
tokens = ["4", "13", "5", "/", "+"]

Output:
6

Explanation:
Step-by-step explanation

Stack = []

Push 4 → [4]  
Push 13 → [4, 13]  
Push 5 → [4, 13, 5]  

Operator '/' → pop 5 and 13 → 13 / 5 = 2.6 → trunc → 2 → push → [4, 2]  

Operator '+' → pop 2 and 4 → 4 + 2 = 6 → push → [6]  

Final answer = 6

❌ wrong input & output 

3. Input:
tokens = ["2", "+"]

Output:
NaN   // incorrect behavior

Explanation:

Stack = []

Push 2 → [2]

Operator '+' → tries to pop two values:
right = 2  
left = undefined  

So: undefined + 2 → NaN  

Final result becomes NaN because there are not enough operands.
*/