// 707 question on leetcode

// ---- Node blueprint ----
class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class MyLinkedList {
    constructor() {
        this.dummy = new Node(0); // fake head node — no real value
        this.size = 0;            // track total number of real nodes
    }

    // ✅ GET: return value at index, or -1 if invalid
    get(index) {
        // invalid index check
        if (index < 0 || index >= this.size) return -1;

        let current = this.dummy;

        // walk index+1 steps from dummy to land ON the target node
        for (let i = 0; i <= index; i++) {
            current = current.next;
        }

        return current.val;
    }

    // ✅ ADD AT HEAD: insert before the first real node
    addAtHead(val) {
        // same as addAtIndex at position 0
        this.addAtIndex(0, val);
    }

    // ✅ ADD AT TAIL: insert after the last real node
    addAtTail(val) {
        // same as addAtIndex at last position
        this.addAtIndex(this.size, val);
    }

    // ✅ ADD AT INDEX: insert new node BEFORE position index
    addAtIndex(index, val) {
        // if index > size, we can't insert
        if (index > this.size) return;

        // if index is negative, treat it as 0 (insert at head)
        if (index < 0) index = 0;

        let prev = this.dummy;

        // walk to the node BEFORE index
        for (let i = 0; i < index; i++) {
            prev = prev.next;
        }

        // create new node and rewire pointers
        const node = new Node(val);
        node.next = prev.next;  // new node points to current node at index
        prev.next = node;       // previous node now points to new node

        this.size++;
    }

    // ✅ DELETE AT INDEX: remove node at position index
    deleteAtIndex(index) {
        // invalid index check
        if (index < 0 || index >= this.size) return;

        let prev = this.dummy;

        // walk to the node BEFORE index
        for (let i = 0; i < index; i++) {
            prev = prev.next;
        }

        // skip over the target node to delete it
        prev.next = prev.next.next;

        this.size--;
    }
}