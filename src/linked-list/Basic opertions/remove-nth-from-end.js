// Definition of ListNode
function ListNode(val, next = null) {
    this.val = val;
    this.next = next;
}

function removeNthFromEnd(head, n) {

    // create dummy node (helps in edge cases)
    let dummy = new ListNode(0, head);

    let fast = dummy;
    let slow = dummy;

    // move fast pointer n+1 steps
    for (let i = 0; i <= n; i++) {
        fast = fast.next;
    }

    // move both pointers
    while (fast !== null) {
        fast = fast.next;
        slow = slow.next;
    }

    // delete the node
    slow.next = slow.next.next;

    return dummy.next;
}

/*
1. input :- head = 1 → 2 → 3 → 4 → 5
            n = 2
output :- 1 → 2 → 3 → 5

   Explanation: Remove the 2nd node from the end (which is 4).

2. input :- head = 1 → 2
            n = 1
output :- 1

   Explanation: Remove the 1st node from the end (which is 2).

3. input :- head = 1
            n = 1
output :- []

   Explanation: Only one node, removing it leaves an empty list.
                The dummy node handles this edge case — dummy.next = null.

❌ Wrong input & output

4. input :- head = 1 → 2 → 3
            n = 3

   Wrong output: [2 → 3]   // ✅ actually correct — 3rd from end IS node 1
   Wrong output: [1 → 2 → 3]  // ❌ nothing removed — n was not applied correctly
   Correct output: [2 → 3]    // ✅ remove the 3rd node from end (node 1)
*/