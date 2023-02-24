class Stack{
    constructor() {
        this.array = [];
    }
    peek() {
        console.log(this.array[this.array.length - 1]);
    }
    push(value) {
        this.array.push(value)
    }
    pop() {
        this.array.pop();
    } 
}

const myStack = new Stack();
myStack.push(10)
myStack.push(20);
myStack.push(30);
myStack.pop();
console.log(myStack);
myStack.peek();