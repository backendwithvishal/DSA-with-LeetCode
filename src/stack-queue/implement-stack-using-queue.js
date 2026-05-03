class MyStack {
  constructor() {
    // We use a plain array as our queue
    // Queue rules: push to back → arr.push(), remove from front → arr.shift()
    this.queue = [];
  }

  push(x) {
    // Step 1: Add new element to the back of the queue
    this.queue.push(x);

    // Step 2: Rotate all elements BEFORE the new one to the back
    // This brings the new element (x) to the FRONT
    let rotations = this.queue.length - 1;
    while (rotations > 0) {
      // Take from front, put at back
      this.queue.push(this.queue.shift());
      rotations--;
    }
    // Now the queue front always holds the most recently pushed element
  }

  pop() {
    // Front of queue = top of stack → just remove and return it
    return this.queue.shift();
  }

  top() {
    // Peek the front without removing
    return this.queue[0];
  }

  empty() {
    // Stack is empty if queue has no elements
    return this.queue.length === 0;
  }
}
/*
1. Operations:
push(1)
push(2)
top()
pop()
empty()

Output:
top() → 2
pop() → 2
empty() → false

Explanation:
Step-by-step explanation

Start: queue = []

push(1)
→ [1]

push(2)
→ push → [1, 2]
→ rotate → [2, 1]

top()
→ return front → 2

pop()
→ remove front → 2
→ queue becomes [1]

empty()
→ false (since one element remains)


2. Operations:
push(10)
push(20)
push(30)
pop()
top()

Output:
pop() → 30
top() → 20

Explanation:
Step-by-step explanation

Start: queue = []

push(10)
→ [10]

push(20)
→ push → [10, 20]
→ rotate → [20, 10]

push(30)
→ push → [20, 10, 30]
→ rotate → [30, 20, 10]

pop()
→ remove front → 30
→ queue becomes [20, 10]

top()
→ return front → 20


❌ wrong input & output 

3. Operations:
pop()

Output:
undefined   // incorrect usage

Explanation:

queue = []

pop()
→ shift() on empty array returns undefined

This is logically incorrect because stack is empty,
but no error is thrown
*/