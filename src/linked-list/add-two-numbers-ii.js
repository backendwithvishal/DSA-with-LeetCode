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
/**
1. Operations:
push(1)
push(2)
peek()
pop()
empty()

Output:
peek() → 1
pop() → 1
empty() → false

Explanation:
Step-by-step explanation

Start:
inbox = []
outbox = []

push(1)
→ inbox = [1]

push(2)
→ inbox = [1, 2]

peek()
→ transfer → outbox = [2, 1], inbox = []
→ return 1

pop()
→ outbox.pop() → 1
→ outbox = [2]

empty()
→ false (since outbox has 2)


2. Operations:
push(10)
push(20)
push(30)
pop()
peek()

Output:
pop() → 10
peek() → 20

Explanation:
Step-by-step explanation

Start:
inbox = []
outbox = []

push(10)
→ inbox = [10]

push(20)
→ inbox = [10, 20]

push(30)
→ inbox = [10, 20, 30]

pop()
→ transfer → outbox = [30, 20, 10]
→ pop → 10
→ outbox = [30, 20]

peek()
→ return last element → 20


❌ wrong input & output

3. Operations:
pop()
peek()

Output:
undefined
undefined

Explanation:

inbox = []
outbox = []

pop()
→ transfer does nothing
→ outbox.pop() → undefined

peek()
→ outbox[-1] → undefined

This is not a bug, but an edge case when queue is empty.
 */