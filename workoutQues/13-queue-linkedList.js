class Node{
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.length = 0;
    }
    peek() {
        console.log(this.first);
    }
    enqueue(value) {
        const newNode = new Node(value);
        if (this.length === 0) {
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }
        this.length++;
    }
    dequeue() {
        if (!this.first) {
            return null;
        } else {
            this.first = this.first.next;
        }
        this.length--;
        if (this.length === 0) {
          this.first = null;
          this.last = null;
        }
    }
}

const myQueue = new Queue();
myQueue.enqueue("10");
myQueue.enqueue("20");
myQueue.enqueue("30");
myQueue.dequeue();
myQueue.peek(); 
console.log(myQueue);