class Node{
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack{
    constructor() {
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }
    peek() {
        console.log(this.top); 
    }
    push(value) {
        const newNode = new Node(value);
        if (this.length === 0) {
            this.top = newNode;
            this.bottom = newNode;
        } else {
            const holdingPointer = this.top;
            this.top = newNode;
            this.top.next = holdingPointer;
        }
        ++this.length;
        return this
    }
    pop() {
        if (!this.top) return null;
        else {
          const deleteNode = this.top;
          this.top = this.top.next;
          this.length--;
          if (this.length === 0) this.bottom = null;
          return this;
        }
    }
}

const myStack = new Stack();
myStack.push(10);
myStack.push(20);
myStack.push(30);
myStack.pop();
// myStack.pop();

console.log(myStack);
// myStack.peek();

// console.log(topValue);