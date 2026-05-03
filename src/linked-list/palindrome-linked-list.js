// 234 Palindrome Linked List
function isPalindrome(head) {

    // STEP 1: Find the middle of the linked list
    let slow = head;
    let fast = head;

    while (fast !== null && fast.next !== null) {
        slow = slow.next;          // move 1 step
        fast = fast.next.next;     // move 2 steps
    }

    // STEP 2: Reverse the second half of the list
    let previous = null;

    while (slow !== null) {
        let nextNode = slow.next;  // store next node
        slow.next = previous;      // reverse link
        previous = slow;           // move previous forward
        slow = nextNode;           // move slow forward
    }

    // STEP 3: Compare first half and reversed second half
    let firstHalf = head;
    let secondHalf = previous;

    while (secondHalf !== null) {
        if (firstHalf.val !== secondHalf.val) {
            return false; // not a palindrome
        }

        firstHalf = firstHalf.next;
        secondHalf = secondHalf.next;
    }

    // If all values matched
    return true;
}

/*
1.  input :- 1 → 2 → 2 → 1
    output :- true
    why output is true ??
    reson :- Forward: 1 2 2 1
             Backward: 1 2 2 1 (same)

2.  input :- 1 → 2 → 3
    output :- false
    why out is false ??
    reson :- Forward: 1 2 3
             Backward: 3 2 1 (not same)
*/