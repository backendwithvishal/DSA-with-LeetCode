// 155 question on leetcode

class MinStack {
  constructor() {
    this.stack = [];       // stores actual values
    this.minStack = [];    // stores current minimum at each level
  }

  push(val) {
    // Push actual value
    this.stack.push(val);

    // Push the current minimum:
    // If minStack is empty, this value IS the minimum
    // Otherwise, compare with the last known minimum
    const currentMin = this.minStack.length === 0
      ? val
      : Math.min(val, this.minStack[this.minStack.length - 1]);

    this.minStack.push(currentMin);
  }

  pop() {
    // Remove top from both stacks to stay in sync
    this.stack.pop();
    this.minStack.pop();
  }

  top() {
    // Return the top of the main stack
    return this.stack[this.stack.length - 1];
  }

  getMin() {
    // Top of minStack always holds the current minimum
    return this.minStack[this.minStack.length - 1];
  }
}

/*
1. Operations:
push(5)
push(3)
push(7)
getMin()
pop()
getMin()

Output:
getMin() → 3
getMin() → 3

Explanation:
Step-by-step explanation

Start:
stack = []
minStack = []

push(5)
→ stack = [5]
→ minStack = [5]

push(3)
→ stack = [5, 3]
→ minStack = [5, 3]

push(7)
→ stack = [5, 3, 7]
→ minStack = [5, 3, 3]

getMin()
→ 3

pop()
→ remove 7
→ stack = [5, 3]
→ minStack = [5, 3]

getMin()
→ 3


2. Operations:
push(2)
push(0)
push(3)
push(0)
getMin()
pop()
getMin()
pop()
getMin()

Output:
0
0
0

Explanation:
Step-by-step explanation

Start:
stack = []
minStack = []

push(2)
→ [2], minStack = [2]

push(0)
→ [2, 0], minStack = [2, 0]

push(3)
→ [2, 0, 3], minStack = [2, 0, 0]

push(0)
→ [2, 0, 3, 0], minStack = [2, 0, 0, 0]

getMin()
→ 0

pop()
→ remove 0
→ stack = [2, 0, 3]
→ minStack = [2, 0, 0]

getMin()
→ 0

pop()
→ remove 3
→ stack = [2, 0]
→ minStack = [2, 0]

getMin()
→ 0


❌ wrong input & output

3. Operations:
pop()
top()
getMin()

Output:
undefined
undefined

Explanation:

stack = []
minStack = []

pop()
→ does nothing (pop on empty array)

top()
→ stack[-1] → undefined

getMin()
→ minStack[-1] → undefined

This is not a bug, but an edge case where operations are called on an empty stack.
*/