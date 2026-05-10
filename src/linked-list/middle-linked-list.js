// 876 question on leetcode

function middleNode(head) {

    let slow = head;   // moves 1 step at a time
    let fast = head;   // moves 2 steps at a time

    // Keep going until fast reaches end of list
    while (fast !== null && fast.next !== null) {
        slow = slow.next;       // slow moves 1 step
        fast = fast.next.next;  // fast moves 2 steps
    }

    // When fast is done, slow is exactly at the middle
    return slow;
}

/*
1. Input:  [1 → 2 → 3 → 4 → 5]

   Output: node with value 3  (the middle node)

   Explanation: 5 nodes → middle is index 2 (0-based).
   slow moves: 1 → 2 → 3 (stops here when fast reaches end)

2. Input:  [1 → 2 → 3 → 4 → 5 → 6]

   Output: node with value 4  (second middle for even-length list)

   Explanation: 6 nodes → two middles are 3 and 4.
   slow moves: 1 → 2 → 3 → 4 (fast reaches end after 3 steps)
   Returns the second middle node (4).

3. Input:  [1 → 2]

   Output: node with value 2

   Explanation: 2 nodes → slow starts at 1, fast jumps to end after 1 step.
   slow moves to 2 → returns 2.

❌ Wrong input & output

4. Input:  [1 → 2 → 3 → 4 → 5]

   Wrong output: node with value 2   // ❌ that's the node before the middle
   Correct output: node with value 3  // ✅ slow pointer lands exactly at the middle
*/