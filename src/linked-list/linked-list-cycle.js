// 141 question on leetcode 

function hasCycle(head) {

    // Edge case: empty list or single node with no next
    if (head === null || head.next === null) return false;

    let slow = head;       //  moves 1 step at a time
    let fast = head;       //  moves 2 steps at a time

    while (fast !== null && fast.next !== null) {
        slow = slow.next;        // move slow by 1 step
        fast = fast.next.next;   // move fast by 2 steps

        // If they meet, there's a cycle
        if (slow === fast) return true;
    }

    // fast reached null → no cycle
    return false;
}

/*
1. Input:  head = [3 → 2 → 0 → -4], pos = 1
   (tail connects back to node at index 1)

   Output: true

   Explanation: slow and fast both start at 3.
   slow: 3 → 2 → 0 → -4 → 2 ...
   fast: 3 → 0 → 2 → 0 ...
   They meet inside the cycle → return true.

2. Input:  head = [1 → 2], pos = 0
   (tail connects back to node at index 0)

   Output: true

   Explanation: fast jumps 2 steps, slow jumps 1. They meet quickly in the 2-node cycle.

3. Input:  head = [1], pos = -1
   (no cycle)

   Output: false

   Explanation: Single node with no next → fast.next is null → loop never runs → return false.

❌ Wrong input & output

4. Input:  head = [1 → 2 → 3 → 4 → 5], pos = -1
   (no cycle — linear list)

   Wrong output: true   // ❌ fast pointer reaches null, they never meet
   Correct output: false // ✅ no cycle exists, fast exits the loop
*/