// 2 question on leetcode

// Definition for singly-linked list
function ListNode(val, next = null) {
    this.val = val;
    this.next = next;
}

var addTwoNumbers = function(l1, l2) {
    let dummy = new ListNode(0);   // dummy head
    let current = dummy;           // pointer for result list
    let carry = 0;                 // carry value

    // loop until both lists and carry are exhausted
    while (l1 || l2 || carry) {
        let val1 = l1 ? l1.val : 0;
        let val2 = l2 ? l2.val : 0;

        let sum = val1 + val2 + carry;

        carry = Math.floor(sum / 10); // update carry
        let digit = sum % 10;         // current digit

        current.next = new ListNode(digit); // create node
        current = current.next;             // move forward

        if (l1) l1 = l1.next;
        if (l2) l2 = l2.next;
    }

    return dummy.next; // return result list
};

/*
1. input :- l1 = [2 → 4 → 3]
         l2 = [5 → 6 → 4]

output :- [7 → 0 → 8]

Explanation :- Numbers stored in reverse: l1 = 342, l2 = 465. 342 + 465 = 807 → stored as [7 → 0 → 8].

2. input :- l1 = [9 → 9]
            l2 = [1]

output :- [0 → 0 → 1]

Explanation :- (99 + 1 = 100) → stored as [0 → 0 → 1]

3. input :- l1 = [0]
            l2 = [0]

output :- [0]

Explanation :- 0 + 0 = 0 → single node [0].

❌ Wrong input & output

4. input :- l1 = [2 → 4 → 3]   // represents 342
            l2 = [5 → 6 → 4]   // represents 465

output :- [8 → 0 → 7]

Explanation :- [8 → 0 → 7] represents 708, not 807.
               Digits are stored in REVERSE order, so the correct answer is [7 → 0 → 8].
*/