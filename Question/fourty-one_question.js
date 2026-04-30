// 232 question on leetcode

class MyQueue {
  constructor() {
    this.inbox = [];   // receives all new pushes
    this.outbox = [];  // serves all pop/peek requests
  }

  push(x) {
    // Always push to inbox — simple O(1)
    this.inbox.push(x);
  }

  // Helper: move inbox → outbox ONLY when outbox is empty
  _transfer() {
    if (this.outbox.length === 0) {
      // Pour everything from inbox into outbox
      // This reverses the order → oldest element lands on top of outbox
      while (this.inbox.length > 0) {
        this.outbox.push(this.inbox.pop());
      }
    }
  }

  pop() {
    // Make sure outbox has elements (transfer if needed)
    this._transfer();
    // Top of outbox = front of queue = oldest element
    return this.outbox.pop();
  }

  peek() {
    // Same as pop but don't remove
    this._transfer();
    return this.outbox[this.outbox.length - 1];
  }

  empty() {
    // Queue is empty only when BOTH stacks are empty
    return this.inbox.length === 0 && this.outbox.length === 0;
  }
}

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