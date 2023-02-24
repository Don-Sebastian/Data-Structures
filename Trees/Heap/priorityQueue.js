class PriorityQueue{
    constructor() {
        this.value = [];
    }
    enqueue(value, priority) {
        let newNode = new Node(value, priority);
        this.value.push(newNode);
        this.bubbleUp();
        return this;
    }
    bubbleUp() {
        let length = this.value.length;
        let currentIndex = this.value[length - 1];
        let currentValue = this.value[currentIndex];
        while (true) {
            let parentIndex = Math.floor((currentIndex - 1) / 2);
            let parentValue = this.value[parentIndex];
            if (currentIndex.priority >= parentValue.priority) break;
            if (parentValue > currentValue) {
                this.value[parentIndex] = currentValue;
                this.value[currentIndex] = parentValue;
                currentIndex = parentIndex;
            }
        }
    }
    dequeue() {
        let min = this.value[0];
        let end = this.value.pop();
        this.value[0] = end;
        this.bubbleDown();
        return min;
    }
    bubbleDown() {
        let currentIndex = 0;
        let currentValue = this.value[0];
        let length = this.value.length;
        while (true) {
            let leftChildIndex = 2 * currentIndex + 1;
            let rightChildIndex = 2 * currentIndex + 2;
            let swap = null;
            let leftChild, rightChild;
            if (leftChildIndex < length) {
                leftChild = this.value[leftChildIndex];
                if (leftChild.priority < currentValue.priority) swap = leftChildIndex;
            }
            if (rightChildIndex < length) {
                rightChild = this.value[rightChildIndex];
                if (
                  (swap === null &&
                    rightValue.priority > currentValue.priority) ||
                  (swap !== null && rightValue.priority > leftValue.priority)
                )
                  swap = rightIndex;
            }
            if (swap === null) break;
            this.heap[currentIndex] = this.heap[swap];
            this.heap[swap] = currentValue;
            currentIndex = swap;
        }
    }
}

class Node{
    constructor(value, priority) {
        this.value = value;
        this.priority = priority;
    }
}