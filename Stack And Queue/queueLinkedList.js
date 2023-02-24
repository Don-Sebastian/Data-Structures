class Node{
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue{
    constructor() {
        this.first = null;
        this.last = null;
        this.lenght = 0;
    }
    enqueue(value) {
        const newNode = new Node(value);
        if (!this.first) {
            this.first = newNode;
            this.last = newNode;
        }else {
            this.last.next = newNode;
            this.last = newNode;
        }
        this.length++;
    }
    dequeue() {
        if (!this.first) return null;
        let removedNode = this.first;
        removedNode.next = null;
        this.first = this.first.next;
        this.length--;
        if (this.length === 0) {
            this.first = null;
            this.last = null;
        }        
    }
    peek() {
        console.log(this.first);
    }
}