// 445 question on leetcode

var addTwoNumbers = function(l1, l2) {
  // Step 1: Push all digits into stacks (gives us right-to-left access)
  const stack1 = [];
  const stack2 = [];

  let curr = l1;
  while (curr !== null) {
    stack1.push(curr.val);
    curr = curr.next;
  }

  curr = l2;
  while (curr !== null) {
    stack2.push(curr.val);
    curr = curr.next;
  }

  // Step 2: Add digits from right to left using stacks
  let carry = 0;
  let head = null; // will be the front of our result list

  while (stack1.length > 0 || stack2.length > 0 || carry > 0) {
    // Pop digit from each stack (use 0 if stack is empty)
    const d1 = stack1.length > 0 ? stack1.pop() : 0;
    const d2 = stack2.length > 0 ? stack2.pop() : 0;

    const sum = d1 + d2 + carry;
    carry = Math.floor(sum / 10); // carry for next iteration
    const digit = sum % 10;       // actual digit to store

    // Step 3: Prepend new node to result list
    // New node points to current head → becomes the new head
    const newNode = { val: digit, next: head };
    head = newNode;
  }

  return head;
};
/*
1. Input:  l1 = [7 → 2 → 4 → 3]   // represents 7243
           l2 = [5 → 6 → 4]        // represents 564

   Output: [7 → 8 → 0 → 7]         // represents 7807

   Explanation: 7243 + 564 = 7807

2. Input:  l1 = [2 → 4 → 3]        // represents 243
           l2 = [5 → 6 → 4]        // represents 564

   Output: [8 → 0 → 7]             // represents 807

   Explanation: 243 + 564 = 807

3. Input:  l1 = [9 → 9 → 9]        // represents 999
           l2 = [1]                 // represents 1

   Output: [1 → 0 → 0 → 0]         // represents 1000

   Explanation: 999 + 1 = 1000  (carry propagates all the way)

❌ Wrong input & output

4. Input:  l1 = [1 → 2 → 3]        // represents 123
           l2 = [4 → 5 → 6]        // represents 456

   Output: [5 → 7 → 9]             // ✅ correct

   Wrong output: [9 → 7 → 5]       // ❌ digits reversed — result must stay in forward order
*/