// 2487 question on leetcode
var removeNodes = function (head) {

    // Stack will store nodes in decreasing order (front to back)
    const stack = [];

    let curr = head;

    // Traverse the entire linked list
    while (curr !== null) {

        // Pop all nodes from stack that are SMALLER than current node
        // Because current node (greater value) is to their right → they must be removed
        while (stack.length > 0 && stack[stack.length - 1].val < curr.val) {
            stack.pop();
        }

        // Current node survives (for now) — push it
        stack.push(curr);

        curr = curr.next;
    }

    // Re-link all surviving nodes from the stack
    for (let i = 0; i < stack.length - 1; i++) {
        stack[i].next = stack[i + 1];
    }

    // Last node's next must be null (end of list)
    stack[stack.length - 1].next = null;

    // First node in stack is the new head
    return stack[0];
};
/*
1. input :- head = [5, 2, 13, 3, 8]
   Explanation :- 
        5 → removed (because 13 is on the right and bigger)
        2 → removed (because 13 is bigger)
        13 → stays
        3 → removed (because 8 is bigger)
        8 → stays
   output :- [13, 8]

2. input :- head = [10, 9, 8, 7]
   Explanation :-
       Each node is greater than everything to its right 
   output :- [10, 9, 8, 7]
*/