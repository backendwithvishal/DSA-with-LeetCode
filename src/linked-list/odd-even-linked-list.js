// Definition for singly-linked list
function ListNode(val, next = null) {
    this.val = val;
    this.next = next;
}

function oddEvenList(head) {

    // if list is empty
    if (!head) return head;

    let odd = head;          // first node (odd)
    let even = head.next;    // second node (even)
    let evenHead = even;     // store start of even list

    // rearrange nodes
    while (even && even.next) {

        odd.next = even.next;   // link next odd node
        odd = odd.next;         // move odd pointer

        even.next = odd.next;   // link next even node
        even = even.next;       // move even pointer
    }

    // attach even list after odd list
    odd.next = evenHead;

    return head;
}
/*
input :- [1,2,3,4,5]

output :- [1,3,5,2,4]

Explanation: Odd-indexed nodes (1,3,5) come first, then even-indexed nodes (2,4).
             Indices are 1-based positions, not values.

2. Input:  [2 → 1 → 3 → 5 → 6 → 4 → 7]

   Output: [2 → 3 → 6 → 7 → 1 → 5 → 4]

   Explanation: Odd positions (1st,3rd,5th,7th) = 2,3,6,7 → Even positions (2nd,4th,6th) = 1,5,4

3. Input:  [1 → 2]

   Output: [1 → 2]

   Explanation: Only one odd and one even node — order stays the same.

❌ Wrong input & output

4. Input:  [1 → 2 → 3 → 4]

   Wrong output: [1 → 3 → 2 → 4]   // ❌ only first pair swapped
   Correct output: [1 → 3 → 2 → 4]  // ✅ actually correct for 4 nodes
   (odd: 1,3 → even: 2,4)
*/