// 206 question on leetcode 

var reverseList = function(head) {
  let prev = null; // will become the new tail (null) at start
  let curr = head; // start processing from the head

  while (curr !== null) {
    const nextNode = curr.next; // save next BEFORE we overwrite it

    curr.next = prev; // flip the pointer — curr now points backwards

    prev = curr;      // prev moves one step forward
    curr = nextNode;  // curr moves one step forward (using saved reference)
  }

  // curr is null (past the end), prev is the new head
  return prev;
};