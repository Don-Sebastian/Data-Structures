// LEETCODE 232


class MyQueue {
  constructor() {
    this.pushStack = [];
    this.popStack = [];
  }
  enqueue(value) {
    if (!this.pushStack.length) {
      while (this.popStack.length) {
        this.pushStack.push(this.popStack.pop());
      }
    }
    this.pushStack.push(value);
  }
  dequeue() {
    if (!this.popStack.length) {
      while (this.pushStack.length) {
        this.popStack.push(this.pushStack.pop());
      }
    }
    return this.popStack.pop();
  }
  peek() {
    if (!this.popStack.length) {
      while (this.pushStack.length) {
        this.popStack.push(this.pushStack.pop());
      }
    }
    return this.popStack[this.popStack.length - 1];
  }
  empty() {
    return !this.pushStack.length && !this.popStack.length;
  }
}
