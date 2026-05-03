// 1381 question on leetcode 

class CustomStack {
    constructor(maxSize) {
        this.maxSize = maxSize;
        this.stack = [];
        this.inc = new Array(maxSize).fill(0);
    }

    push(x) {
        if (this.stack.length < this.maxSize) {
            this.stack.push(x);
        }
    }

    pop() {
        if (this.stack.length === 0) return -1;

        let i = this.stack.length - 1;

        let res = this.stack.pop() + this.inc[i];

        if (i > 0) {
            this.inc[i - 1] += this.inc[i];
        }

        this.inc[i] = 0;

        return res;
    }

    increment(k, val) {
        let i = Math.min(k, this.stack.length) - 1;
        if (i >= 0) {
            this.inc[i] += val;
        }
    }
}
/*
1. Operations:
CustomStack(3)
push(1)
push(2)
inc(2, 100)
pop()
pop()
pop()

Output:
102
101
-1

Explanation:
Step-by-step explanation

Start:
stack = []
inc = []

push(1)
→ stack = [1]
→ inc = [0]

push(2)
→ stack = [1, 2]
→ inc = [0, 0]

inc(2, 100)
→ boundaryIndex = 1
→ inc = [0, 100]

pop()
→ val = 2 + 100 = 102
→ pass increment down → inc[0] = 100
→ stack = [1]
→ inc = [100]

pop()
→ val = 1 + 100 = 101
→ stack = []
→ inc = []

pop()
→ stack empty → -1


2. Operations:
CustomStack(2)
push(5)
push(2)
push(3)
inc(3, 10)
pop()
pop()

Output:
12
15

Explanation:
Step-by-step explanation

Start:
stack = []
inc = []

push(5)
→ [5], inc = [0]

push(2)
→ [5, 2], inc = [0, 0]

push(3)
→ ignored (stack full)

inc(3, 10)
→ boundaryIndex = 1
→ inc = [0, 10]

pop()
→ val = 2 + 10 = 12
→ pass down → inc[0] = 10
→ stack = [5], inc = [10]

pop()
→ val = 5 + 10 = 15


❌ wrong input & output

3. Operations:
CustomStack(2)
inc(1, 100)
pop()

Output:
-1

Explanation:

Stack is empty initially

inc(1, 100)
→ boundaryIndex = -1 → ignored

pop()
→ stack empty → return -1

This is not a bug, but an edge case where increment has no effect.

*/