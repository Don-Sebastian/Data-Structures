class BinarMinHeap{
    constructor() {
        this.heap = [44, 39, 33, 18, 27, 12];
    }
    insert(value) {
        this.heap.push(value);
        if(this.heap.length) this.bubbleUp();
        return this;
    }
    bubbleUp() {
        let currentIndex = this.heap.length - 1;
        let currentValue = this.heap[currentIndex];
        
        while (true) {
            let parentIndex = Math.floor((currentIndex - 1) / 2);
            let parentValue = this.heap[parentIndex];
            if (parentValue > currentValue) break;
            this.heap[parentIndex] = currentValue;
            this.heap[currentIndex] = parentValue;
            currentIndex = parentIndex;
        }
    }
    deleteMin() {
        let min = this.heap[0];
        let deletedValue = this.heap.pop();
        this.heap[0] = deletedValue;
        this.bubbleDown();
        return min;
    }
    bubbleDown() {
        let length = this.heap.length;
        let currentValue = this.heap[0];
        let currentIndex = 0;
        while (true) {
            let leftIndex = (2 * currentIndex) + 1;
            let rightIndex = (2 * currentIndex) + 2;
            let swap = null;
            let leftValue, rightValue;
            if (leftIndex < length) {
                if (this.heap[leftIndex] < currentValue) swap = leftIndex;
            }
            if (rightIndex < length) {
                rightValue = this.heap[rightIndex];
                leftValue = this.heap[leftIndex];
                if (swap === null && rightValue > currentValue ||
                    swap !== null && rightValue > leftValue) swap = rightIndex;
            }
            if (swap === null) break;
            this.heap[currentIndex] = this.heap[swap];
            this.heap[swap] = currentValue;
            currentIndex = swap;
        }
    }
}
// [null, 44, 33, 35, 23, 24, 25, 55];
const obj = new BinarMinHeap();

// obj.insert(44);
// obj.insert(33);
// obj.insert(35);
// obj.insert(23);
// obj.insert(24);
// obj.insert(25);
console.log(obj.insert(55));

