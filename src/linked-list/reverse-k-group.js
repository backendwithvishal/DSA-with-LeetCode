// Definition of ListNode
function ListNode(val, next = null) {
    this.val = val;
    this.next = next;
}

function reverseKGroup(head, k) {

    let curr = head;
    let count = 0;

    // Step 1: Check if at least k nodes exist
    while (curr && count < k) {
        curr = curr.next;
        count++;
    }

    // If we have k nodes → reverse
    if (count === k) {

        // Step 2: Reverse first k nodes
        let prev = null;
        curr = head;  // reuse outer curr, no redeclaration

        for (let i = 0; i < k; i++) {
            let next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        }

        // Step 3: Recursively process remaining list
        head.next = reverseKGroup(curr, k);

        return prev; // new head after reverse
    }

    // If less than k nodes → return as it is
    return head;
}
/*
1.  input :- 1 → 2 → 3 → 4 → 5
        k = 3
    output :- 3 → 2 → 1 → 4 → 5

    Explanation: First group of 3 reversed → [3,2,1]. Remaining 2 nodes < k, left as-is → [4,5].

2.  input :- 1 → 2 → 3 → 4 → 5
        k = 2
    output :- 2 → 1 → 4 → 3 → 5

    Explanation: Groups of 2 reversed → [2,1] and [4,3]. Last node (5) has no pair, stays.

3.  input :- 1 → 2 → 3
        k = 1
    output :- 1 → 2 → 3

    Explanation: k = 1 means reverse groups of 1 — no change.

❌ Wrong input & output

4.  input :- 1 → 2 → 3 → 4
        k = 3

    Wrong output: [3 → 2 → 1 → 4 → 3 → 2 → 1]   // ❌ reversed all nodes including the remainder
    Correct output: [3 → 2 → 1 → 4]               // ✅ only first group of 3 reversed, node 4 stays (< k)
*/