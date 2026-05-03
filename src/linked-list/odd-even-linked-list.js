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
input:- [1,2,3,4,5]

output:- [1,3,5,2,4]
*/