// 92 question on leetcode 

var reverseBetween = function(head, left, right) {
  // Dummy node handles edge case where left=1 (no real node before reverse zone)
  const dummy = { val: 0, next: head };

  // Step 1: Walk to the node just BEFORE position 'left'
  let beforeLeft = dummy;
  for (let i = 1; i < left; i++) {
    beforeLeft = beforeLeft.next;
  }

  // Step 2: 'tail' is the first node of the reverse zone
  // After reversal it becomes the TAIL of the reversed section
  const tail = beforeLeft.next;

  // Step 3: Reverse (right - left) times
  // Each iteration moves tail.next to the front of the reversed section
  for (let i = 0; i < right - left; i++) {
    const nodeToMove = tail.next;       // grab the next node to move to front
    tail.next = nodeToMove.next;        // tail skips over the node being moved
    nodeToMove.next = beforeLeft.next;  // moved node points to current front
    beforeLeft.next = nodeToMove;       // beforeLeft now points to moved node (new front)
  }

  // Step 4: dummy.next is the real head (may have changed if left=1)
  return dummy.next;
};

/*
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