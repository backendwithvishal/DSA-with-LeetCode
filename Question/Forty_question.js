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