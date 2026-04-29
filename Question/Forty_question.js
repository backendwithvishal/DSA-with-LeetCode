// 1019 question on leetcode

var nextLargerNodes = function(head) {
  // Step 1: Convert linked list to array for easy index access
  const values = [];
  let curr = head;
  while (curr !== null) {
    values.push(curr.val);
    curr = curr.next;
  }

  const n = values.length;
  const answer = new Array(n).fill(0); // default 0 = no greater element found
  // Stack stores INDICES of elements still waiting for their next greater value
  const stack = [];

  // Step 2: Traverse the values array
  for (let i = 0; i < n; i++) {
    // While stack has elements AND current value is GREATER than stack top's value
    // → current element is the "next greater" for the stack top
    while (stack.length > 0 && values[i] > values[stack[stack.length - 1]]) {
      const index = stack.pop();       // this index finally found its answer
      answer[index] = values[i];       // record the next greater value
    }

    // Push current index — still waiting for something greater to its right
    stack.push(i);
  }

  // Step 3: Anything left in stack has no next greater → stays 0 (already set)
  return answer;
};

/*
1. Input:
head = [2,1,5]

Output:
[5,5,0]

Explanation:
Step-by-step explanation

values = [2,1,5]

i = 0 → stack = [0]  
i = 1 → stack = [0,1]  

i = 2 → value = 5  
→ 5 > 1 → answer[1] = 5  
→ 5 > 2 → answer[0] = 5  
→ stack = [2]  

Final answer = [5,5,0]

2. Input:
head = [2,7,4,3,5]

Output:
[7,0,5,5,0]

Explanation:
Step-by-step explanation

values = [2,7,4,3,5]

i = 0 → stack = [0]  
i = 1 → 7 > 2 → answer[0] = 7 → stack = [1]  
i = 2 → stack = [1,2]  
i = 3 → stack = [1,2,3]  
i = 4 → 5 > 3 → answer[3] = 5  
        5 > 4 → answer[2] = 5  
        stack = [1,4]  

Remaining indices (1,4) → no greater → 0  

Final answer = [7,0,5,5,0]

❌ wrong input & output

3. Input:
head = null

Output:
[]

Explanation:

values = []
n = 0

Loop does not run
Return empty array []

This is not a bug, but a valid edge case handled correctly
*/