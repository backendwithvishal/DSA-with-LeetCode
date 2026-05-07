// 61 question on leetode

var rotateRight = function(head, k) {
  // Edge cases: empty list, single node, or k=0 means no rotation needed
  if (!head || !head.next || k === 0) return head;

  // Step 1: Find the length and reach the tail
  let tail = head;
  let n = 1; // count nodes starting from head
  while (tail.next !== null) {
    tail = tail.next;
    n++;
  }
  // tail is now the last node, n is the total length

  // Step 2: Calculate effective rotation (k >= n is redundant)
  const effectiveK = k % n;
  if (effectiveK === 0) return head; // already in correct position

  // Step 3: Make the list circular (connect tail back to head)
  tail.next = head;

  // Step 4: Find the new tail
  // New tail is at position (n - effectiveK - 1) steps from head
  let newTail = head;
  for (let i = 0; i < n - effectiveK - 1; i++) {
    newTail = newTail.next;
  }

  // Step 5: New head is right after new tail, then break the circle
  const newHead = newTail.next;
  newTail.next = null; // cut the circle — new tail now points to null

  return newHead;
};

/*
1. Input:  head = [1 → 2 → 3 → 4 → 5], k = 2

   Output: [4 → 5 → 1 → 2 → 3]

   Explanation: n = 5, effectiveK = 2 % 5 = 2.
   Last 2 nodes [4,5] move to the front.

2. Input:  head = [0 → 1 → 2], k = 4

   Output: [2 → 0 → 1]

   Explanation: n = 3, effectiveK = 4 % 3 = 1.
   Last 1 node [2] moves to the front.

3. Input:  head = [1 → 2 → 3], k = 3

   Output: [1 → 2 → 3]

   Explanation: effectiveK = 3 % 3 = 0 → no rotation needed, list unchanged.

❌ Wrong input & output

4. Input:  head = [1 → 2 → 3 → 4], k = 2

   Wrong output: [3 → 4 → 1 → 2]   // ✅ actually correct
   Wrong output: [2 → 3 → 4 → 1]   // ❌ this is a LEFT rotation, not right
*/