class MinHeap {
  constructor() {
    this.heap = [];
  }
  insert(array) {
    this.heap.push(array[0]);
    for (let i = 1; i < array.length; i++) {
      this.heap.push(array[i]);
      this.bubbleUp();
    }
    return this.heap;
  }
  bubbleUp() {
    let currentIndex = this.heap.length - 1;
    let parentIndex = this.parentNode(currentIndex);
    while (this.heap[parentIndex] > this.heap[currentIndex]) {
      [this.heap[parentIndex], this.heap[currentIndex]] = [
        this.heap[currentIndex],
        this.heap[parentIndex],
      ];
      currentIndex = parentIndex;
      parentIndex = this.parentNode(currentIndex);
    }
  }
  parentNode(index) {
    return Math.floor((index - 1) / 2);
  }
  deletionMin() {
    if (!this.heap.length) return "Empty Heap";
    let min = this.heap[0];
    let end = this.heap.pop();
    this.heap[0] = end;
    this.bubbleDown();
    return min;
  }
  bubbleDown() {
    let currentIndex = 0;
    let currentValue = this.heap[0];
    let length = this.heap.length;
    while (true) {
      let leftIndex = 2 * currentIndex + 1;
      let rightIndex = 2 * currentIndex + 2;
      let swap = null;
      let leftValue, rightValue;
      if (leftIndex < length) {
        leftValue = this.heap[leftIndex];
        if (leftValue < currentValue) swap = leftIndex;
      }
      if (rightIndex < length) {
        rightValue = this.heap[rightIndex];
        if (
          (swap === null && rightValue < currentValue) ||
          (swap !== null && rightValue < leftValue)
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

const obj = new MinHeap();
console.log(obj.insert([44, 39, 33, 18, 27, 12, 55]));
console.log(obj.deletionMin());
console.log(obj);