// 92 question on leetcode 

var reverseBetween = function(head, left, right) {
  // Dummy node handles edge case where left=1 (no real node before reverse zone)
  const dummy = { val: 0, next: head };

  // Step 1: Walk to the node just BEFORE position 'left'
  let beforeLeft = dummy;
  for (let i = 1; i < left; i++) {
    beforeLeft = beforeLeft.next;
  }

  // Step 2: 'tail' is the first node of the reverse zone
  // After reversal it becomes the TAIL of the reversed section
  const tail = beforeLeft.next;

  // Step 3: Reverse (right - left) times
  // Each iteration moves tail.next to the front of the reversed section
  for (let i = 0; i < right - left; i++) {
    const nodeToMove = tail.next;       // grab the next node to move to front
    tail.next = nodeToMove.next;        // tail skips over the node being moved
    nodeToMove.next = beforeLeft.next;  // moved node points to current front
    beforeLeft.next = nodeToMove;       // beforeLeft now points to moved node (new front)
  }

  // Step 4: dummy.next is the real head (may have changed if left=1)
  return dummy.next;
};