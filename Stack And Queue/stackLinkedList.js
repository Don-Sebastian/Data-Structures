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
    push(value) {
        const newNode = new Node(value);
        if (this.length === 0) {
            this.top = newNode;
            this.bottom = newNode;
        } else {
            const topPointer = this.top;
            this.top = newNode;
            this.top.next = topPointer;
        }
        this.length++;
        return this;
    }
    pop() {
        if (!this.top) return "Empty stack";
        const popedNode = this.top;
        popedNode.next = null;
        this.top = this.top.next;
        this.length--;
        return popedNode;
    }
    peek() {
        console.log(this.top);
    }
}

class StackArray{
    constructor() {
        this.array = [];
    }
    peek() {
        console.log(this.array);
    }
    push(value) {
        this.array.push(value);
    }
    pop() {
        this.array.pop();
    }
}

