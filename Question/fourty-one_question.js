// 232 question on leetcode

class MyQueue {
  constructor() {
    this.inbox = [];   // receives all new pushes
    this.outbox = [];  // serves all pop/peek requests
  }

  push(x) {
    // Always push to inbox — simple O(1)
    this.inbox.push(x);
  }

  // Helper: move inbox → outbox ONLY when outbox is empty
  _transfer() {
    if (this.outbox.length === 0) {
      // Pour everything from inbox into outbox
      // This reverses the order → oldest element lands on top of outbox
      while (this.inbox.length > 0) {
        this.outbox.push(this.inbox.pop());
      }
    }
  }

  pop() {
    // Make sure outbox has elements (transfer if needed)
    this._transfer();
    // Top of outbox = front of queue = oldest element
    return this.outbox.pop();
  }

  peek() {
    // Same as pop but don't remove
    this._transfer();
    return this.outbox[this.outbox.length - 1];
  }

  empty() {
    // Queue is empty only when BOTH stacks are empty
    return this.inbox.length === 0 && this.outbox.length === 0;
  }
}