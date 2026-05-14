// 142 question on leetcode 

var detectCycle = function(head) {
  if (!head || !head.next) return null; // 0 or 1 node — no cycle possible

  let slow = head;
  let fast = head;

  // ---- PHASE 1: Detect if cycle exists ----
  while (fast !== null && fast.next !== null) {
    slow = slow.next;       // moves 1 step
    fast = fast.next.next;  // moves 2 steps

    if (slow === fast) {
      // Cycle detected! slow and fast met inside the cycle
      // Move to Phase 2
      break;
    }
  }

  // If fast reached null — no cycle exists
  if (fast === null || fast.next === null) return null;

  // ---- PHASE 2: Find the cycle entrance ----
  // Reset slow to head, keep fast at meeting point
  // Move both ONE step at a time — they meet at cycle start
  slow = head;
  while (slow !== fast) {
    slow = slow.next;
    fast = fast.next;
  }

  // slow === fast === cycle entrance node
  return slow;
};

/*
1. Input:  head = [3 → 2 → 0 → -4], pos = 1
   (tail connects back to node at index 1, value = 2)

   Output: node with value 2

   Explanation:
   Phase 1: slow and fast meet inside the cycle.
   Phase 2: reset slow to head (3), keep fast at meeting point.
   Both move 1 step at a time → they meet at node 2 (cycle entrance).

2. Input:  head = [1 → 2], pos = 0
   (tail connects back to node at index 0, value = 1)

   Output: node with value 1

   Explanation: Cycle entrance is the head itself (node 1).

3. Input:  head = [1], pos = -1
   (no cycle)

   Output: null

   Explanation: Single node, no cycle → Phase 1 exits immediately → return null.

❌ Wrong input & output

4. Input:  head = [1 → 2 → 3 → 4], pos = 2
   (tail connects back to node at index 2, value = 3)

   Wrong output: node with value 4   // ❌ that's where slow/fast meet, not the entrance
   Correct output: node with value 3  // ✅ Phase 2 correctly walks back to the cycle start
*/