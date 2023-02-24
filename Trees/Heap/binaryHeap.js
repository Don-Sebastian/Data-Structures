class BinaryMaxHeap{
    constructor() {
        this.heap = [44, 39, 33, 18, 27, 12];
    }
    insert(value) {
        this.heap.push(value);
        this.bubbleUp();
        return this;
    }
    bubbleUp() {
        let currentIndex = this.heap.length - 1;
        let currentValue = this.heap[currentIndex];
        while (true) {
            let parentIndex = Math.floor((currentIndex - 1) / 2);
            let parentValue = this.heap[parentIndex];
            if (currentValue <= parentValue) break;
            this.heap[parentIndex] = currentValue;
            this.heap[currentIndex] = parentValue;
            currentIndex = parentIndex;
        }
    }
    extractMax() {
        let max = this.heap[0];
        let end = this.heap.pop();
        this.heap[0] = end;
        this.bubbleDown();
        return max;
    }
    bubbleDown() {
        let currentIndex = 0;
        let currentValue = this.heap[0];
        let length = this.heap.length;
        while (true) {
            let leftIndex = (2 * currentIndex + 1);
            let rightIndex = (2 * currentIndex + 2);
            let swap = null;
            let leftValue, rightValue;
            if (leftIndex < length) {
                leftValue = this.heap[leftIndex];
                if(leftValue > currentValue) swap = leftIndex;
            }
            if (rightIndex < length) {
                rightValue = this.heap[rightIndex];
                if ((swap === null && rightValue > currentValue) ||
                    (swap !== null && rightValue > leftValue)) swap = rightIndex;
            }
            
            if (swap === null) break;
            this.heap[currentIndex] = this.heap[swap];
            this.heap[swap] = currentValue;
            currentIndex = swap;
        }
    }
}

// [null, 44, 33, 35, 23, 24, 25, 55];
let obj = new BinaryMaxHeap();
// obj.insert(45);
console.log(obj.insert(55));
console.log(obj.extractMax());
console.log(obj);