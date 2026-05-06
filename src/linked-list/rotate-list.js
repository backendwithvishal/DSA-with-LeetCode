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