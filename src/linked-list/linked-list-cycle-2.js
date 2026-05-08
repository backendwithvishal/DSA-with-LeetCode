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